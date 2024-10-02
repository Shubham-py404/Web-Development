import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // yeh development mode mai har code ko 2 baar chalata hai 
    <App />
  // </StrictMode>,
)
