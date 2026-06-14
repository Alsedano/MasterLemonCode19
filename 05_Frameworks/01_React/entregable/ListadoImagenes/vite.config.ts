import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [checker({ typescript: true }), react(), tsconfigPaths(), svgr()],
});
