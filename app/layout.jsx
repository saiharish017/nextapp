"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeWraper } from "@/context/ThemeProvider";
import { useThemeContext } from "@/context/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  

  return (
    <ClerkProvider>
     
    <html lang="en" >
     
    <ThemeWraper>
    <body className={inter.className}>{children}</body>
    </ThemeWraper>
    </html> 
   
    </ClerkProvider>
  );
}
