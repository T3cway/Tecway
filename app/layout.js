import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/Fotter";

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

export const metadata = {
  title: "Tecway - Cutting-Edge Digital Solutions",
  description: "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions. Transform your business with next-gen technology.",
  icons: {
    icon: "/Tecway.png",
    shortcut: "/Tecway.png",
    apple: "/Tecway.png",
  },
  // Performance optimizations
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Tecway - Cutting-Edge Digital Solutions",
    description: "Full-service tech agency specializing in web applications, mobile apps, AI chatbots, and custom software solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountPropSingle.variable} ${imperialScript.variable} antialiased`}
        suppressHydrationWarning
      >
        <NavBar />

        {children}
      <Footer/>

      </body>
    </html>
  );
}
