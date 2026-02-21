import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Zyrah",
  description: "Your trusted e-commerce destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="mx-auto py-4 sm:p-0 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
          <div className="pt-16">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        <ToastContainer position="bottom-right" autoClose={5000} />
      </body>
    </html>
  );
}
