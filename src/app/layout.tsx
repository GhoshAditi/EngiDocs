import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/common/Navbar";
import Footer from "@/components/common/Footer";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EngiDocs - Your One-Stop Solution for Academic Success!",
  description: "Get notes, video solutions, and previous year question papers for your exams! Made by Aditi and Rishi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
