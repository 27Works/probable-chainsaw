import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import "../styles/fonts.css";

export const metadata: Metadata = {
  title: "Radical Motorsport",
  description: "27.works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`h-full font-futura`}>
        <div className="min-h-screen flex flex-col">
          {/* <TopBanner /> */}
          <div className="flex-grow">
            <div className="">
              <div className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-black/70 to-black/30">
                <Header />
              </div>

              <div className="flex-grow mx-auto">{children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
