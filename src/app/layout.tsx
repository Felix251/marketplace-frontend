import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainHeader } from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marketplace - Your One-Stop Shop",
  description: "Discover amazing products from trusted sellers. Shop with confidence and get the best deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <MainHeader />
        <main className="flex-grow">
          {children}
        </main>
        <MainFooter />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
