import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navbar } from './pages/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  const client= new QueryClient;
  return (
    <div className="App">
     <QueryClientProvider client={client}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </HashRouter>
     </QueryClientProvider>
    </div>
  );
}

export default App;
