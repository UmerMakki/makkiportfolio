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
  title: "Umer Makki | Data Analyst & Zendesk Developer",
  description:
    "Portfolio of Umer Makki — Data Analyst, Power BI, Python, SQL, Zendesk Suite, and machine learning. Based in Lahore, Pakistan.",
  keywords: [
    "Umer Makki",
    "Data Analyst",
    "Power BI",
    "Zendesk Developer",
    "Python",
    "SQL",
    "Pakistan",
  ],
  openGraph: {
    title: "Umer Makki | Data Analyst & Zendesk Developer",
    description:
      "Data analytics, CRM automation, and IT support — projects, experience, and contact.",
    type: "website",
    url: "https://umermakki.netlify.app",
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
