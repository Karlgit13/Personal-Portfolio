import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/Personal-Portfolio/' // krävs för GitHub Pages under /repo
})
