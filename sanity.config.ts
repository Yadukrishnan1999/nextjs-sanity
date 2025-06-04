import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas/index"

const config = defineConfig({
  projectId: "waa03wpn",
  dataset: "production",
  title: "next-sanity",
  apiVersion: "02-06-2025",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
