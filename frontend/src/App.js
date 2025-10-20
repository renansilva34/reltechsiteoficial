import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Projetos from './pages/Projetos';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;