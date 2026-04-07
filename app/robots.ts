import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://academy.t21services.com.ng/sitemap.xml",
    host: "https://academy.t21services.com.ng",
  };
}
