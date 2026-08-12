import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_IMAGE,
  DEFAULT_DESCRIPTION,
} from "./seoSchemas";

function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  structuredData,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${SITE_URL}${path}`;

  const baseKeywords =
    "Chandan Chaudhary, StackGallery, MERN Stack Developer, React Developer, Full Stack Developer, Freelance Web Developer India, Web Developer Portfolio";
  const allKeywords = keywords ? `${keywords}, ${baseKeywords}` : baseKeywords;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="Chandan Chaudhary" />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ChandanChaudhary" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
}

export default SEO;
