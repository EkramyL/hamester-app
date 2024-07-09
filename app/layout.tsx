import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UpperNav from "@/components/upperNav";
import LowerNav from "@/components/lowerNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamester App",
  description: "app to play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen max-w-xl flex-col bg-slate-800 font-bold text-white">
          <div className="flex">
            <UpperNav />
          </div>
          <main className="flex flex-grow">{children}</main>
          <div className="flex bg-slate-400">
            <LowerNav />
          </div>
        </div>
      </body>
    </html>
  );
}
