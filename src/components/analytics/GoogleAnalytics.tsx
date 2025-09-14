"use client";

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from "react";

const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  (window as any).gtag?.("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) {
      return;
    }
    
    const search = searchParams.toString();
    
    const url = pathname + (search ? `?${search}` : ""); 
    
    pageview(GA_MEASUREMENT_ID, url);

  }, [pathname, searchParams, GA_MEASUREMENT_ID]);


  if (process.env.NODE_ENV !== 'production' || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script 
        strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}