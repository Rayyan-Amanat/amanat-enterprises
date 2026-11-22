import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error: Vite resolves this CSS side-effect import at build time.
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
