import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { defineCustomElements } from '@pine-ds/core/loader'
import '@pine-ds/core/dist/pine-core/pine-core.css'
import './index.css'
import App from './App.tsx'

defineCustomElements()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
