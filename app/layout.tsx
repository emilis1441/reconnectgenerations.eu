import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "ReconnectGenerations | Preserve Your Family Legacy",
  description: "A timeless place to preserve your parents' stories, wisdom, and voice for future generations.",
  generator: "v0.app",
  metadataBase: new URL("https://reconnectgenerations.eu"),
  openGraph: {
    title: "ReconnectGenerations | Preserve Your Family Legacy",
    description: "A timeless place to preserve your parents' stories, wisdom, and voice for future generations.",
    url: "https://reconnectgenerations.eu",
    siteName: "ReconnectGenerations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ReconnectGenerations - Preserve Your Family Legacy",
      },
    ],
    locale: "en_EU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReconnectGenerations | Preserve Your Family Legacy",
    description: "A timeless place to preserve your parents' stories, wisdom, and voice for future generations.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "facebook-domain-verification": "j0f7dglezjy9jw1ha2nuq7kk89u7tr",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WMF9256WQC" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WMF9256WQC');
          `}
        </Script>

        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1165758685772915');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>

      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}

        {/* Meta Pixel fallback image */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1165758685772915&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
