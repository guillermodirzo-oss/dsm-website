import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dsmcleaningsolutions.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/deep-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/move-out-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/recurring-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/plainfield-il`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/standard-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/eco-friendly-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/apartment-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/post-construction-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/airbnb-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/one-time-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
