import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/Fotter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitcountPropSingle = localFont({
  src: "../public/Bitcount_Prop_Single/static/BitcountPropSingle-Regular.ttf",
  variable: "--font-bitcount-prop-single",
  display: "swap",
});

// Using CSS @font-face instead since fonts are in public directory
// const imperialScript = localFont({
//   src: "../public/Imperial_Script/ImperialScript-Regular.ttf",
//   variable: "--font-imperial-script",
//   display: "swap",
// });

export const metadata = {
  title: "Tecway ",
  description: "Software agency ",
  icons: {
    icon: "/Tecway.png",
    shortcut: "/Tecway.png",
    apple: "/Tecway.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountPropSingle.variable} antialiased`}
        suppressHydrationWarning
      >
        <NavBar />

        {children}
      <Footer/>

      </body>
    </html>
  );
}
