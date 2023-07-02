import { Advertising } from "@/components/Advertising";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--Manrope" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white`}>
        {children}
        <section className="flex justify-center mt-32 w-full">
          <Advertising />
        </section>
        <Footer />
      </body>
    </html>
  );
}
