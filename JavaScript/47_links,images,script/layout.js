import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Netflix - just chill",
  description: "What the helll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* always write page.js for accessing / files ulrs */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
        {children}
        < Footer/>
        </body>
    </html>
  );
}
