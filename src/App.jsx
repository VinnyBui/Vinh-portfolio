import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';

const Home = lazy(() => import('./components/pages/home'));
function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
