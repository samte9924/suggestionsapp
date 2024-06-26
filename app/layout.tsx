import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./UI/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eLgis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" type="image/svg+xml" href="/static/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Toaster position="top-center" />
        <Navbar />
        {children}
        <div id="bg"></div>
      </body>
    </html>
  );
}
