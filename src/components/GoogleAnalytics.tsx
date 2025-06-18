import { lazy, useEffect } from "react";

const GoogleAnalytics = lazy(() => {
  return Promise.resolve({
    default: () => {
      useEffect(() => {
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `;
        document.head.appendChild(script2);

        // Google Search Console verification
        const verification = document.createElement('meta');
        verification.name = 'google-site-verification';
        verification.content = 'your-verification-code-here';
        document.head.appendChild(verification);
      }, []);
      return null;
    }
  });
});

export default GoogleAnalytics;


