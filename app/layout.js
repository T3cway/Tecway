import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/Fotter";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const bitcountPropSingle = localFont({
  src: "../public/Bitcount_Prop_Single/static/BitcountPropSingle-Regular.ttf",
  variable: "--font-bitcount-prop-single",
  display: "swap",
  preload: false, // Only preload if used above the fold
});

const imperialScript = localFont({
  src: "../public/Imperial_Script/ImperialScript-Regular.ttf",
  variable: "--font-imperial-script",
  display: "swap",
  preload: false, // Only preload if used above the fold
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tecway.dev';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tecway - Cutting-Edge Digital Solutions",
    template: "%s | Tecway",
  },
  description: "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions. Transform your business with next-gen technology.",
  keywords: [
    "web development",
    "mobile app development",
    "AI chatbots",
    "custom software",
    "UI/UX design",
    "Flutter",
    "React",
    "Next.js",
    "digital solutions",
    "tech agency",
  ],
  authors: [{ name: "Tecway" }],
  creator: "Tecway",
  publisher: "Tecway",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/Tecway.png",
    shortcut: "/Tecway.png",
    apple: "/Tecway.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tecway",
    title: "Tecway - Cutting-Edge Digital Solutions",
    description: "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions. Transform your business with next-gen technology.",
    images: [
      {
        url: `${SITE_URL}/Tecway.png`,
        width: 1200,
        height: 630,
        alt: "Tecway - Cutting-Edge Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tecway - Cutting-Edge Digital Solutions",
    description: "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions.",
    images: [`${SITE_URL}/Tecway.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountPropSingle.variable} ${imperialScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <NavBar />

        {children}
      <Footer/>

      </body>
    </html>
  );
}
