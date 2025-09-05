import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";

// Load Nunito variable font
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

// Load Nunito Sans variable font
const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weekone",
  description: "Landing page for clients and coaches",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${nunitoSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
