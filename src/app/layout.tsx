import localFont from "next/font/local";
import "./globals.css";
import "./font.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackTop from "@/components/BackTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface OpenGraph {
  title: string;
  description: string;
  url: string;
  type: string;
  images: { url: string; width: number; height: number; alt: string }[];
  siteName: string;
}

interface Twitter {
  card: string;
  site: string;
  title: string;
  description: string;
  image: string;
}

interface Metadata {
  title: string;
  description: string;
  charset?: string;
  openGraph?: OpenGraph;
  author?: string;
  keywords?: string;
  robots?: string;
  twitter?: Twitter;
}

export const metadata: Metadata = {
  title: "Nikita Dulenko - Expert Software Engineer",
  description:
    "Discover the expertise of Nikita Dulenko, a software engineer specializing in scalable and efficient systems. Explore innovative solutions and projects.",
  charset: "UTF-8",
  openGraph: {
    title: "Nikita Dulenko - Expert Software Engineer",
    description:
      "Discover the expertise of Nikita Dulenko, a software engineer specializing in scalable and efficient systems. Explore innovative solutions and projects.",
    url: "https://chikit.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://chikit.vercel.app//assets/banner.png",
        width: 1200,
        height: 630,
        alt: "Nikita Dulenko Portfolio Banner",
      },
    ],
    siteName: "Nikita Dulenko Portfolio",
  },
  author: "Nikita Dulenko",
  keywords:
    "software engineer, scalable systems, efficient systems, Nikita Dulenko, Blockchain Developer, Web Developer, AI Developer, Full Stack Developer",
  twitter: {
    card: "summary_large_image",
    site: "@ChiKit",
    title: "Nikita Dulenko - Expert Software Engineer",
    description: "Discover the expertise of Nikita Dulenko, a software engineer specializing in scalable and efficient systems.",
    image: "https://chikit.vercel.app//assets/banner.png",
  },
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet={metadata.charset} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta property="og:type" content={metadata.openGraph?.type} />
        <meta property="og:title" content={metadata.openGraph?.title} />
        <meta property="og:description" content={metadata.openGraph?.description} />
        <meta property="og:image" content={metadata.openGraph?.images[0]?.url} />
        <meta property="og:url" content={metadata.openGraph?.url} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName} />
        <meta name="twitter:card" content={metadata.twitter?.card} />
        <meta name="twitter:site" content={metadata.twitter?.site} />
        <meta name="twitter:title" content={metadata.twitter?.title} />
        <meta name="twitter:description" content={metadata.twitter?.description} />
        <meta name="twitter:image" content={metadata.twitter?.image} />
        <link rel="canonical" href={metadata.openGraph?.url} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: metadata.author,
            jobTitle: "Software Engineer",
            url: metadata.openGraph?.url,
            // sameAs: [
            //   "https://twitter.com/ChiKit",
            // ],
          })}
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
        <BackTop />
        <ToastContainer />
      </body>
    </html>
  );
};

export default AppLayout;
