/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
import './../public/css/plugins.css'
import './../public/css/style.css'

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      {/*<link rel="stylesheet" href="/css/plugins.css" />*/}
      {/*<link rel="stylesheet" href="/css/style.css" />*/}
    </head>
      {/*<body className={`${geistSans.variable} ${geistMono.variable}`}>*/}
      <body>
        {children}

        <script src="/js/jquery-3.7.1.min.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        {/*<script src="/js/all.js"></script>*/}
        <script src="/js/circletype.min.js"></script>
        <script src="/js/jquery.nice-select.min.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/jquery.magnific-popup.min.js"></script>
        {/*<script src="/js/odometer.min.js"></script>*/}
        <script src="/js/viewport.jquery.js"></script>
        <script src="/js/jquery.meanmenu.min.js"></script>
        <script src="/js/select2.js"></script>
        {/*<script src="/js/gsap.min.js"></script>*/}
        {/*<script src="/js/gsap-scroll-smoother.js"></script>*/}
        {/*<script src="/js/ScrollToPlugin.min.js"></script>*/}
        <script src="/js/main.js"></script>
      </body>
    </html>
  );
}
