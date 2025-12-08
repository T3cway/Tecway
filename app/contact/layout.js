const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Tecway for your next project. We'd love to hear about your web application, mobile app, AI chatbot, or custom software needs.",
  openGraph: {
    title: "Contact Tecway - Get In Touch",
    description: "Have a question or a project in mind? Contact Tecway for cutting-edge digital solutions.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactLayout({ children }) {
  return children;
}

