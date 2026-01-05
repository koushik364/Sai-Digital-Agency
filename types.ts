
// Added React import to provide access to React namespace for type definitions
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface AudienceCardProps {
  category: string;
  painPoint: string;
  solution: string;
  image: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  stat: string;
}