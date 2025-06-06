import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import GlobalStyle from '@/components/GlobalStyle/GlobalStyle';
import { Toaster } from '@/components/ui/sonner';
import AppProvider from '@/app/AppProvider';

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['vietnamese'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <GlobalStyle>
            <html lang="en" suppressHydrationWarning={true}>
                <body className={`${spaceGrotesk.className} antialiased`}>
                    <AppProvider>{children}</AppProvider>
                    <Toaster />
                </body>
            </html>
        </GlobalStyle>
    );
}
