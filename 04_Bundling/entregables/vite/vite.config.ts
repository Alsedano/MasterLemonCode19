import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
    plugins: [checker({ typescript: true }), react(), analyzer({
        analyzerMode: "static",
        openAnalyzer: false,
        reportTitle: "Bundle Analysis",
        fileName: "bundle-report.html",
    }),],
});
