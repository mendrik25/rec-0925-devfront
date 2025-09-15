import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        tailwindcss(), // Si vous utilisez Tailwind CSS
    ],
    server: {
        open: true, // Ouvre automatiquement le navigateur
        port: 5173, // Port par défaut de Vite
    },
    build: {
        outDir: "dist", // Dossier de sortie pour le build
    },
});
