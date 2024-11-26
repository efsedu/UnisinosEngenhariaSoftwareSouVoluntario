import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const irishGrover = localFont({
  src: "./fonts/IrishGrover-Regular.ttf",
  variable: "--font-irish-grover",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SouVoluntário",
  description: "Sou Voluntário é uma plataforma de voluntariado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${irishGrover.variable} antialiased flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
