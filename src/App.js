import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens = ['React', 'Veu', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens} />
      <h1>Renderização de Listas</h1>
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;