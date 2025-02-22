import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	server: {
		port: 3000,
		open: true, // Открывает браузер автоматически
	},
	build: {
		sourcemap: true,
	},
});
