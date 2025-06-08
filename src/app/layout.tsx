
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/componets/Home/NavBar/ResponsiveNav";
import Footer from "@/componets/Home/Footer/Footer";
import ScrollToTop from "@/componets/Helper/ScrollToTop";

const font = Poppins ({
  weight:['100', '200', '300','400','500','600','700','800','900'],
  subsets:['latin']
})



export const metadata: Metadata = {
  title: "Travel For You | Next js 15",
  description: "Travel landing page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}  antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
