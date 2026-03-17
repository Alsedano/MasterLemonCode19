import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import { analyzer } from "vite-bundle-analyzer";
import { brotliCompress } from 'zlib'
import { promisify } from 'util'
import gzipPlugin from 'rollup-plugin-gzip'

const brotliPromise = promisify(brotliCompress)

export default defineConfig({
    plugins: [
        checker({ typescript: true }), 
        react(), 
        analyzer({
            analyzerMode: "static",
            openAnalyzer: false,
            reportTitle: "Bundle Analysis",
            fileName: "bundle-report.html",
        }),

        gzipPlugin(),
            // Brotli compression as .br files
        gzipPlugin({
            customCompression: content => brotliPromise(Buffer.from(content)),
            fileName: '.br',
        }),
    ],
});
