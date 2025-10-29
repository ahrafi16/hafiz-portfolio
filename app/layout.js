import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import footer from "./footer/page";
import Nav from "./nav/Nav";

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

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="px-10 md:px-50 mx-auto">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Nav></Nav>
//         {children}
//         {footer()}
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {/* Wrap page content with padding instead */}
        <main className="px-10  md:px-30 lg:px-50 mx-auto">
          {children}
          {footer()}
        </main>
      </body>
    </html>
  );
}

