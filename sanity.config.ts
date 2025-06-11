import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas/index";
import { presentationTool } from "sanity/presentation";

const config = defineConfig({
  projectId: "waa03wpn",
  dataset: "production",
  title: "next-sanity",
  apiVersion: "02-06-2025",
  basePath: "/admin",
  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: "http://localhost:3000",
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],
  schema: { types: schemas },
});

export default config;
