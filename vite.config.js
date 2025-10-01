import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is the line you need to add and customize.
  // Replace 'your-repo-name' with the actual name of your GitHub repository.
  base: '/your-repo-name/',
});