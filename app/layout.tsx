import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Coding Bootcamp Testimonials Slider | by lilKriT",
  description: "Created with Next.js, Tailwind and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <main>{children}</main>
      </body>
    </html>
  );
}
