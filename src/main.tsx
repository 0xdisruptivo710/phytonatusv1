import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// @ts-expect-error fontsource has no type declarations
import "@fontsource-variable/fraunces"
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
