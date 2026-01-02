import type { Metadata } from "next";
import { Cascadia_Mono } from 'next/font/google';
import "./globals.css";

const cascadiaMono = Cascadia_Mono({
    subsets: ['latin'],
    variable: '--font-cascadia-mono',
});

export const metadata: Metadata = {
    title: "Andrian Pratama",
    description: "Computer Science student at Bina Nusantara University with expertise in fullstack development, server & cloud infrastructure, and end-to-end IT project management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${cascadiaMono.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
