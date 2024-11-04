import "./globals.css";
import { Inter } from "next/font/google";

import { NavBar, ScrollToTop, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://muhamedsafwat.com"),
  alternates: {
    canonical: "/",
  },
  title: "Muhamed Safwat || Web dev",
  description:
    "A Software Engineer and a frontend focused web developer who is passionate about building websites and web applications that lead to the success of your business",
  keywords: [
    "Web developer",
    "Portfolio",
    "Mern stack",
    "full stack",
    "react",
    "nextjs",
    "javascript",
    "frontend",
  ],
  publisher: "Muhamed Safwat",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["apple-touch-icon.png"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Muhamed Safwat || Web dev",
    description: "I turn coffee into code!",
    url: "https://www.muhamedsafwat.com/",
    siteName: "Muhamed Safwat",
    images: [
      {
        url: "/og.png",
        width: 1900,
        height: 930,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className + "relative w-screen overflow-x-hidden"}>
        <NavBar />
        <main className="text-gray-800 relative">
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
