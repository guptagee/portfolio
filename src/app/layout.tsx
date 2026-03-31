import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Mukesh Gupta | MERN Stack Developer",
    template: "%s | Mukesh Gupta",
  },
  description:
    "Personal portfolio of Mukesh Gupta, a MERN stack developer who builds high-performance SEO-friendly web applications.",
  keywords: [
    "MERN stack developer",
    "Next.js portfolio",
    "Technical SEO",
    "Frontend developer",
  ],
  openGraph: {
    title: "Mukesh Gupta | MERN Stack Developer",
    description:
      "Frontend-first MERN stack engineer focused on scalable architecture and organic growth through technical SEO.",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
