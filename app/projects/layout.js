const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

export const metadata = {
  title: "Our Projects",
  description: "Explore our portfolio of web applications, mobile apps, AI chatbots, and custom software solutions. See how we've helped businesses transform with cutting-edge technology.",
  openGraph: {
    title: "Tecway Projects - Our Portfolio",
    description: "Explore our portfolio of web applications, mobile apps, AI chatbots, and custom software solutions.",
    url: `${SITE_URL}/projects`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}

