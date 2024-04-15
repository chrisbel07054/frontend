export default {
    title: `${import.meta.env.VITE_SITE_TITLE}`,
    description: import.meta.env.VITE_PRODUCT_DESCRIPTION,
    author: `${import.meta.env.VITE_PARTNER_FIRST_NAME} ${import.meta.env.VITE_PARTNER_LAST_NAME}`,
    additionalLinkTags: [
      {
        rel: 'icon',
        href: `${import.meta.env.VITE_URL}/logo.png`,
      },
    ],
    additionalMetaTags: [
      {
        property: 'author',
        content: `${import.meta.env.VITE_PARTNER_FIRST_NAME}`,
      },
      {
        property: 'keywords',
        content: import.meta.env.VITE_SEO_KEYWORDS,
      },
    ],
    twitter: {
      cardType: 'summary_large_image',
      handle: `${import.meta.env.VITE_PARTNER_TWITTER}`,
    },
    openGraph: {
      type: 'website',
      site_name: import.meta.env.VITE_SITE_TITLE,
      profile: {
        firstName: import.meta.env.VITE_PARTNER_FIRST_NAME,
      },
      images: [
        {
          url: `${import.meta.env.VITE_URL}/logo.png`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };