import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "T21 Academy Nigeria — Workforce Training, Certification & Talent Deployment",
  description: "T21 Academy Nigeria is a workforce training, certification, and talent deployment platform. Authorised Certiport Examination Centre. Train, get certified, and access real opportunities across Nigeria and globally.",
  keywords: "T21 Academy Nigeria, workforce training Nigeria, Certiport exam centre Nigeria, digital skills training, 3MTT, DeepTech, TVET, certification training Nigeria",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "T21 Academy Nigeria — Train. Certify. Deploy.",
    description: "Workforce training, certification and talent deployment platform. Authorised Certiport Examination Centre. Part of T21 Global Group.",
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
