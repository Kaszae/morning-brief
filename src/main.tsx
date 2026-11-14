import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ladeDaten } from './data/quelle';

const daten = ladeDaten();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {daten ? <App daten={daten} /> : <p className="App">Für heute liegen keine Daten vor.</p>}
    </StrictMode>,
);
