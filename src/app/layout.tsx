import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import '../styles/globals.css';
import { ReduxProvider } from "@/components";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "A weather app built with Next.js and TypeScript",
  icons: {
    icon: "/favicon-32x32.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
