import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talha Tariq · Founder. Builder. Operator.",
  description:
    "Co-founder, builder, and post-sales operator. Seven years driving enterprise implementation across fintech and ERP, plus two ventures of my own. One reaching a million students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className="relative min-h-screen bg-bg text-ink">
        <Nav />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
