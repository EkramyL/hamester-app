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
        <div className="flex h-screen max-w-xl flex-col bg-[#1c1f24] font-bold text-white">
          <div className="flex">
            <UpperNav />
          </div>
          <main className="flex flex-grow">{children}</main>
          <div className="mx-1 flex rounded-2xl bg-[#272a2f] p-1">
            <LowerNav />
          </div>
        </div>
      </body>
    </html>
  );
}
