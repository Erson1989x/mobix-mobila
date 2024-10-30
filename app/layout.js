import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Mobix Mobila",
  description: "Mobix Mobila Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
