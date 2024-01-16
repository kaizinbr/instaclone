import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/main/header";
import Menu from "@/components/main/menu";


const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home | Instakai",
    description: "clone básico do insta",
};

 
export const viewport: Viewport = {
  themeColor: '657ED4',
}
 

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">

            <body className={inter.className}>
                <Header />
                <main className="mt-14 md:mt-10 mb-12">
                {children}
                </main>
                <Menu />
            </body>
        </html>
    );
}
