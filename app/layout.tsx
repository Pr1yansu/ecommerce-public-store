import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Allura, Prompt } from "next/font/google";
import Navbar from "@/components/Navbar";
import ModalProvider from "@/Providers/ModalProvider";
import ToastProvider from "@/Providers/ToastProvider";

const heading = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--heading-font",
});

const body = Prompt({
  subsets: ["latin"],
  weight: ["400", "700", "500"],
  variable: "--body-font",
});

const cursive = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--cursive-font",
});

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${cursive.variable}
      `}
      >
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
