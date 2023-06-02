import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://JojoUrbina.github.io/React-Api-rick-morty/"
  ,
  plugins: [react()],
})
