import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginNode } from "vite-plugin-node";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/Final-Project-SPA---React/",
    plugins: [
        react(),
        VitePluginNode({
            // Especifica las opciones de plugin aquí
            // En general, deberías usar la configuración predeterminada
        }),
    ],
});
