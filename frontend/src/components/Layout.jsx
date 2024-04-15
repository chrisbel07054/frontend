import React from "react";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation"; 
import Footer from "./Footer"; 
import { Toaster } from "react-hot-toast";
import cx from "classnames";
import seoConfig from "../config.js"

function Layout({
  children,
  className,

}) {
  const title = seoConfig.title;
  const description = seoConfig.description;
  const url = seoConfig.openGraph.url || window.location.href;
  const ogImage = seoConfig.openGraph.images[0].url;
  const faviconURL = seoConfig.additionalLinkTags.find(link => link.rel === 'icon').href;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="robots" content={seoConfig.noIndex ? "noindex, nofollow" : "index, follow"} />
        <meta property="og:type" content={seoConfig.openGraph.type} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={seoConfig.openGraph.title || title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        <link rel="icon" href={faviconURL} />
      </Helmet>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
          },
          iconTheme: {
            primary: "#fde68a",
            secondary: "#000",
          },
        }}
      />
      <Navigation />
      <div
        style={{ backgroundImage: `url(/fondo.svg)` }}
        className={cx(" bg-cover bg-center ", className)}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;