import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What's the Word?",
  description: "Describe the word you're trying to remember.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}