import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway } from 'next/font/google';
import { Fira_Code } from 'next/font/google';
import { Outfit } from 'next/font/google';


import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const fireCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-firacode',
});

export const metadata: Metadata = {
  title: "Rahul Raj | Portfolio",
  description: "A portfolio of impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${fireCode.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
