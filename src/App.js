import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <>
      <header className="cabecalho-loja">
        <div className="container-loja">
          <h1>geração tech store</h1>
          <p>Confira os produtos e adicione novos itens à lista.</p>
        </div>
      </header>
      <main className="container-loja conteudo-loja">
        <ProductList />
      </main>
    </>
  );
}

export default App;
