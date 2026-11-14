import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// https://vite.dev/config/
// viteSingleFile packt JavaScript, CSS und Schrift in eine einzige dist/index.html,
// damit der Skill sie als ein Artifact veröffentlichen kann.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
})
