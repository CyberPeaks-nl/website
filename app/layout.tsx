/* eslint-disable @next/next/no-page-custom-font */
import React, { PropsWithChildren } from "react";
import { COMPANY_NAME, FULL_NAME, SNIPPET, TAG_LINE } from "./constants";
import "./globals.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={`${FULL_NAME} - ${SNIPPET}`} />
        <title>{`${COMPANY_NAME} - ${TAG_LINE}`}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gray">{children}</body>
    </html>
  );
};

export default Layout;
