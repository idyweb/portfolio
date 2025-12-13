import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Idongesit Inyang | Software Developer",
  description:
    "Backend developer building production ready systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-neon">
        <Navbar />
        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
