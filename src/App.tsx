import { AnimatePresence } from 'framer-motion';
import React from 'react';
import AboutPage from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

function App() {
  const element = useRoutes([
    {
      path: '/resume',
      element: <HomePage />
    },
    {
      path: '/resume/about',
      element: <AboutPage />
    },
    {
      path: '/resume/contacts',
      element: <ContactsPage />
    },
    {
      path: '*',
      element: <Navigate to="/resume" replace />
    }
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
