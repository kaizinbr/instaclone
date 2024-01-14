import HeaderMsg from "@/components/message/HeaderMsg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>
        <HeaderMsg />
    {children}</>;
}
