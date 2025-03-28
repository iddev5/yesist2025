import { Button } from './components/ui/button';
import { ThemeProvider } from './components/theme-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
