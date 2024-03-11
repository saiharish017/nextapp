"use client"

import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeWraper } from "@/context/ThemeProvider";


export default function RootLayout({ children }) {
  

  return (
    <ClerkProvider>
     
    <html lang="en"  >
     
    <ThemeWraper>
    <body >{children}</body>
    </ThemeWraper>
    </html> 
   
    </ClerkProvider>
  );
}
