export const dynamic = "force-static";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joshbuilds.me";

  const routes = [
    "",
    "/work",
    "/work/prometheus",
    "/work/pulse",
    "/work/forge",
    "/work/aura",
    "/thoughts",
    "/field-notes",
    "/field-notes/modals-keep-warm",
    "/field-notes/6dof-matting-t4",
    "/field-notes/grid-ui-teaching-tool",
    "/lab",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/work") ? 0.8 : 0.6,
  }));
}
