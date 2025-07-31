import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChatbot from '@/components/FloatingChatbot';
import SOSButton from '@/components/SOSButton';
import { Toaster } from 'react-hot-toast';
import { Bell } from 'lucide-react';

export const metadata: Metadata = {
  title: 'JanMitra - Bridging Humans and Animals for a Better Tomorrow',
  description: 'AI-assisted platform for animal rescue and care via community + vet network',
  manifest: '/manifest.json',
  themeColor: '#2F3E46',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingChatbot />
        <SOSButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}