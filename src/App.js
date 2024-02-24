import './App.css';
import HomePage from './components/HomePage'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contatos from './components/Contatos'

function App() {
  return (
    <div className="App">
      <HomePage />
      <Sobre />
      <Skills />
      <Projetos />
      <Contatos />
    </div>
  );
}

export default App;
