import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/Lenis";

const inter = Inter({ subsets: ["latin"] });

const title = "Ayush Pandey – Backend & Full-Stack Developer";
const description = "Portfolio of Ayush Pandey, a developer focused on building scalable backend systems and full-stack applications with modern technologies like Node.js, Next.js, and AWS.";
const url = "https://ayushportfolio-taupe.vercel.app/";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ayush Pandey",
  "url": url,
  "sameAs": [
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_GITHUB_URL,
    process.env.NEXT_PUBLIC_X_URL
  ],
  "jobTitle": "Backend & Full-Stack Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "Ayush Pandey"
  }
};

export const metadata = {
  title: {
    default: title,
    template: `%s | Ayush Pandey`,
  },
  description: description,
  metadataBase: new URL(url),
  keywords: ["Ayush Pandey", "Backend Developer", "Full-Stack Developer", "Node.js", "Next.js", "React", "AWS", "Portfolio"],
  creator: "Ayush Pandey",
  
  // Open Graph
  openGraph: {
    type: "website",
    url: url,
    title: title,
    description: description,
    siteName: "Ayush Pandey's Portfolio",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Ayush Pandey - Developer Portfolio"
    }]
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@ayush130206",
    creator: "@ayush130206",
    title: title,
    description: description,
    images: ["/og-image.png"]
  },

  // Verification and other meta tags
  // verification: {
  //   google: "your-google-verification-code", 
  // },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

 
  alternates: {
    canonical: url,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Manifest
  // manifest: "/site.webmanifest", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta property="twitter:domain" content="ayushportfolio-taupe.vercel.app" />
      </head>
      <body className={inter.className}>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
