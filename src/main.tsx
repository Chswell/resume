import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <HashRouter basename={'/resume'}>
    <App />
  </HashRouter>
);
