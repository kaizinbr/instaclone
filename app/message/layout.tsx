import HeaderMsg from "@/components/message/HeaderMsg";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mensagens | Instakai",
    description: "me chame pra um trabalho vá tô precisando",
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
