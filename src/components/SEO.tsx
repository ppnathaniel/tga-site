import { useEffect } from "react";

// SEO Component
type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

const SEO: React.FC<SEOProps> = ({ title, description, path = '' }) => {
  useEffect(() => {
    document.title = `${title} | Tanzania Gaming Association`;
    
    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      (metaDesc as HTMLMetaElement).name = 'description';
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = description;

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: `${title} | Tanzania Gaming Association` },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://tga.co.tz${path}` },
      { property: 'og:image', content: 'https://tga.co.tz/og-image.jpg' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      (meta as HTMLMetaElement).content = tag.content;
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      (canonical as HTMLLinkElement).rel = 'canonical';
      document.head.appendChild(canonical);
    }
    (canonical as HTMLLinkElement).href = `https://tga.co.tz${path}`;

    // Schema.org markup
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Tanzania Gaming Association",
      "url": "https://tga.co.tz",
      "logo": "https://tga.co.tz/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+255-XX-XXXXXXX",
        "contactType": "customer service"
      }
    };
    
    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      (schemaScript as HTMLScriptElement).type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, [title, description, path]);

  return null;
};

export default SEO;