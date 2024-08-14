import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './Basis/App.jsx'
import AppLink from './Link/AppLink.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLink />
  </StrictMode>,
)
