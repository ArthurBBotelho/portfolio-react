import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import HomePage from './components/HomePage'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contatos from './components/Contatos'
import Footer from './components/Footer';

function App() {
  return (
    <div className="m-8">
      <HomePage />
      <Sobre />
      <Skills />
      <Projetos />
      <Contatos />
      <Footer />
    </div>
  );
}

export default App;
