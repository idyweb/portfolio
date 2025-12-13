import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


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
      <body className="flex flex-col min-h-screen">
        <div className="neo-bg fixed inset-0 -z-10" aria-hidden="true" />
        <Navbar />
        <main className="flex-grow">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}

