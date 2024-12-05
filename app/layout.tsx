import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import GrainEffect from "@/components/visualEffects/grain-effect";
import { Cursor } from "@/components/cursor/cursor";

// Google Fonts
const mainFont = Bricolage_Grotesque({
  subsets: ["latin"],
});

const oswaldFont = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const pixelFont = localFont({
  src: "../public/fonts/pixelfont.ttf", // Ensure path is correct
  variable: "--font-pixel",
});

export const metadata: Metadata = {
  title: "Rohit Darunde",
  description: "Rohitkumar's official portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          mainFont.className,
          oswaldFont.variable,
          pixelFont.variable
        )}
      >
        <GrainEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
