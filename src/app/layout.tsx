import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael | Software Engineering Intern Portfolio",
  description:
    "Personal portfolio of Michael, Software Engineering Intern. Building scalable systems, high-performance web products, and modern backend architectures.",
  openGraph: {
    title: "Michael | Software Engineering Intern Portfolio",
    description: "Building scalable systems, high-performance web products, and modern backend architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f3f3f3] text-[#111111] antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
