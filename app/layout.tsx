import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "T21 Academy Nigeria: Training, Certification and Employment",
  description: "T21 Academy Nigeria delivers practical digital, technical, and professional training programmes. Authorised Certiport Examination Centre. Physical centres in Abuja and Ekiti. Part of T21 Global Group.",
  keywords: "T21 Academy Nigeria, workforce training Nigeria, Certiport exam centre Nigeria, digital skills training, 3MTT, DeepTech, TVET, certification training Nigeria",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "T21 Academy Nigeria: Training, Certification and Employment",
    description: "Practical training programmes across digital, technical, and professional skills. Authorised Certiport Examination Centre. Physical centres in Abuja and Ekiti. Part of T21 Global Group.",
    url: "https://academy.t21services.com.ng",
    siteName: "T21 Academy Nigeria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
