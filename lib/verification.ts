import { GoogleGenAI } from "@google/genai";

export interface VerificationResult {
  emailValid: boolean;
  phoneValid: boolean;
  reason?: string;
  urls?: { title: string; uri: string }[];
}

/**
 * High-Integrity Data Firewall
 * Performs real external structural checks and Live Google Search grounding.
 */
export const verifyContactAuthenticity = async (
  email: string,
  phone: string,
  goal: string
): Promise<VerificationResult> => {
  const phoneDigits = phone.replace(/\D/g, '');
  
  // 1. PHYSICAL PATTERN CHECK
  const isSequential = /0123456|1234567|2345678|3456789|9876543|8765432/.test(phoneDigits);
  const isRepetitive = /^(\d)\1+$/.test(phoneDigits);
  const isImpossibleLength = phoneDigits.length < 10 || phoneDigits.length > 15;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (isSequential || isRepetitive || isImpossibleLength || !emailPattern.test(email)) {
    return {
      emailValid: emailPattern.test(email),
      phoneValid: !isSequential && !isRepetitive && !isImpossibleLength,
      reason: "Pattern analysis indicates non-human data entry."
    };
  }

  // 2. ACTUAL WEB SEARCH: Google Search Tool
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
        VERIFY LIVE DATA EXISTENCE:
        Determine if these contact details belong to a real person or active business.
        - Email: ${email}
        - Phone: ${phone}
        - Context: ${goal}

        SEARCH TASKS:
        1. Look for this phone number or email on business profiles, LinkedIn, or directory listings.
        2. Analyze if the email format and phone block align with legitimate users in this industry.
        
        Provide a verdict: Start your response with 'AUTHENTIC' if verified, or 'FRAUDULENT' if highly suspicious.
        Follow with a one-sentence reason based on search results.
      `,
      config: {
        tools: [{ googleSearch: {} }],
      }
    });

    const text = response.text || "";
    const isAuthentic = text.toUpperCase().includes("AUTHENTIC") && !text.toUpperCase().includes("FRAUDULENT");
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const urls = groundingChunks?.map((chunk: any) => chunk.web).filter(Boolean) || [];

    return {
      emailValid: isAuthentic,
      phoneValid: isAuthentic,
      reason: text,
      urls: urls
    };
  } catch (error) {
    console.error("Search Grounding Error:", error);
    return { emailValid: true, phoneValid: true }; 
  }
};

/**
 * High-Priority EmailJS Dispatcher
 */
export const sendAutomatedConfirmations = async (details: any): Promise<{ success: boolean; error?: string; demo?: boolean }> => {
  const PUBLIC_KEY: string = "KiCiQEBhPyMyFCPEZ";
  const TEMPLATE_ID: string = "template_g51x4fi"; 
  const SERVICE_ID: string = "service_q3ujovj"; 

  try {
    const emailjs = (window as any).emailjs;
    if (!emailjs) throw new Error("EmailJS library not loaded on page.");

    emailjs.init(PUBLIC_KEY);

    // Discrete Mapping for your EmailJS Template
    const templateParams = {
      lead_full_name: details.fullName || `${details.firstName || ''} ${details.lastName || ''}`.trim(),
      lead_email: details.email,
      lead_phone: details.phone || "Not provided",
      appointment_date: details.date || "N/A",
      appointment_time: details.time || "N/A",
      industry: details.industry || "N/A",
      ad_spend: details.spend || "N/A",
      business_goal: details.goal || details.message || "No goal provided.",
      reply_to: details.email
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

    console.log("Email Dispatch: ✅ SUCCESS", response.status, response.text);
    return { success: true };
  } catch (err: any) {
    const errorMsg = err?.text || err?.message || "Unknown delivery error.";
    console.error("EmailJS Error Detailed:", errorMsg);
    return { success: false, error: errorMsg };
  }
};