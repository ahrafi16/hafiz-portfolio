import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import nav from "./nav/page";
import footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hafizur Rahman",
  description: "Portfolio of Hafizur Rahman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="px-30 mx-auto">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {nav()}
        {children}
        {footer()}
      </body>
    </html>
  );
}
