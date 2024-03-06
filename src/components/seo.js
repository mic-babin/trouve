import React from "react";
import { useSiteMetadata } from "../utils/metadata.hook";

export const SEO = ({ title, description, pathname, children }) => {
  const isBrowser = typeof window !== "undefined";
  const language =
    isBrowser && window.location.href.includes("/en") ? "en" : "fr";
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title ? title + defaultTitle : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };
  if (isBrowser) document.documentElement.lang = language;
  return (
    <>
      <title>
        {language == "en"
          ? "TROUVÉ Montreal | Premier Talent Recruitment Agency"
          : "TROUVÉ Montréal | Agence de Recrutement de Talents"}
      </title>
      <meta
        name="description"
        content={
          language == "en"
            ? "Connect with the top talents in Montreal. TROUVÉ is a team of recruiters who specializes in the creative and administrative spheres, who creates close connections between talents and employers."
            : "Connectez-vous avec les meilleurs talents à Montréal. TROUVÉ est une équipe de recruteurs spécialisée dans les sphères créatives et administratives, qui cultive des liens étroits entre les talents et les employeurs."
        }
      />
      <meta
        name="keywords"
        content={
          language == "en"
            ? "Montreal recruitment agency, Talent acquisition Montreal, Hiring solutions Montreal"
            : "Agence de recrutement Montréal, Acquisition de talents Montréal, Solutions d'embauche Montréal"
        }
      ></meta>
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta
        name="twitter:description"
        content={
          language == "en"
            ? "Connect with the top talents in Montreal. TROUVÉ is a team of recruiters who specializes in the creative and administrative spheres, who creates close connections between talents and employers."
            : "Connectez-vous avec les meilleurs talents à Montréal. TROUVÉ est une équipe de recruteurs spécialisée dans les sphères créatives et administratives, qui cultive des liens étroits entre les talents et les employeurs."
        }
      />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta
        name="google-site-verification"
        content="copy your code from the Google Meta Tag"
      />
      {children}
    </>
  );
};
