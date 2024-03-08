"use client";
import { Lemon } from "next/font/google";
import "./globals.scss";
import Header from "./components/header/header";
import { FeedbackContext, constFeedbackData } from "./feedbackContext";
import { useState } from "react";

const lemon = Lemon({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-lemon',
  display: 'swap',
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [feedbackData, setFeedbackData] = useState(constFeedbackData);

  return (
    <html lang="en" className={`${lemon.variable}`}>
      <body >
        <Header />
        <FeedbackContext.Provider value={{ feedbackData, setFeedbackData }}>
          {children}
        </FeedbackContext.Provider>
      </body>
    </html>
  );
}
