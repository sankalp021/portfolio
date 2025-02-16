import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio showcasing my software development projects and skills",
  keywords: ["Portfolio", "Software Developer", "Web Development", "Full Stack", "Developer"],
  authors: [{ name: "Sankalp Chaturvedi" }],
  creator: "Sanaklp Chaturvedi",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas /> 
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
