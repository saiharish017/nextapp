"use client"

import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeWraper } from "@/context/ThemeProvider";


export default function RootLayout({ children }) {
  

  return (
    
    
     
    <html lang="en"  >
     <ClerkProvider>
    <ThemeWraper>
    <body >{children}</body>
    </ThemeWraper>
    </ClerkProvider>
    </html> 
   
    
    
  );
}
