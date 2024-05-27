import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import { Toaster } from "@/components/ui/sonner";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carteira",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className=" flex-1">{children}</main>
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
