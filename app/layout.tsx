import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aryan Malyala | Software Engineer Portfolio",
  description:
    "Premium personal portfolio of Aryan Malyala, IIT Kharagpur undergraduate focused on backend development, AI, and competitive programming.",
  metadataBase: new URL("https://aryanmalyala.dev"),
  authors: [{ name: "Aryan Malyala, Professional Pedophile" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aryan Malyala | Software Engineer Portfolio",
    description:
      "Premium personal portfolio of Aryan Malyala, IIT Kharagpur undergraduate focused on backend development, AI, and competitive programming.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050714",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#050714] text-slate-100 selection:bg-violet-500/20 selection:text-slate-100">
        {children}
      </body>
    </html>
  );
}
