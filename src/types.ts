export interface LeadData {
  userName: string;
  agencyName: string;
  phone: string;
  email?: string;
  experienceLevel?: string;
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  metric: string;
  metricLabel: string;
  iconName: string;
  badge: string;
  gridSpan: string; // e.g. "col-span-12 md:col-span-7"
  demoPrompt?: string;
  bgGradient: string;
  imageUrl?: string;
}

export interface CurriculumModule {
  number: number;
  title: string;
  duration: string;
  summary: string;
  lessons: string[];
  toolsUsed: string[];
  exampleImage?: string;
  exampleCaption?: string;
  practicalOutcome?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  agency: string;
  city: string;
  image: string;
  quote: string;
  result: string;
  rating: number;
  videoUrl?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pago' | 'temario' | 'asesoria';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model' | 'assistant';
  content: string;
  timestamp: string;
  actionCta?: {
    label: string;
    action: 'open_checkout' | 'whatsapp';
  };
}
