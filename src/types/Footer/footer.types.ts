export interface FooterProps {
    className?: string;
  }
  
  export interface FooterLinkItem {
    key: string;
    label: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLinkItem[];
  }
  
  export interface SocialMediaLink {
    platform: string;
    href: string;
    icon: React.ReactNode;
  }
  
  export interface NewsletterFormData {
    email: string;
  }