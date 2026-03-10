"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from "react";
import Script from 'next/script';

const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  if (typeof window !== "undefined") {
    (window as any).gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window === "undefined") {
      return;
    }

    const search = searchParams?.toString();
    const url = pathname + (search ? `?${search}` : "");

    pageview(GA_MEASUREMENT_ID, url);

  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  if (process.env.NODE_ENV !== 'production' || !GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
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