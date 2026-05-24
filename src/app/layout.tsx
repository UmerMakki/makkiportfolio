import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umer Makki | IT Professional & Developer",
  description:
    "Portfolio of Umer Makki — IT professional building modern web apps, full-stack solutions, and premium digital experiences.",
  keywords: [
    "Umer Makki",
    "portfolio",
    "web developer",
    "IT professional",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Umer Makki | IT Professional",
    description: "Modern portfolio — projects, services, and contact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
