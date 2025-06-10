import Footer from "../Footer";
import Header from "../Header";
import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Listing Page",
  description: "Listing page of ZipCare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` antialiased bg-gray-50`}>
      <Header />
      <div className="pb-[24px]">{children}</div>
      <Footer />
    </div>
  );
}
