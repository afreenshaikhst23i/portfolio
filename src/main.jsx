import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import  './animation/ScrollReveal.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
        <App />
        <video autoPlay muted loop playsInline poster={`${import.meta.env.BASE_URL}body-bg-fallback.png`} className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover z-[-5]">
            <source src={`${import.meta.env.BASE_URL}bg-video-1.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#121212] opacity-70 left-0 top-0"></div>
    </>
  </StrictMode>,
)
