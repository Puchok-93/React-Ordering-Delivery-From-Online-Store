import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css';
import App from './components/app/app.tsx';
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
