import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';
import { DATA_CONSULTA, ofertasBrasileiras, ofertasDaApi, produtosComplementares } from '../data/ofertasBrasileiras';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);
  const [adicionados, setAdicionados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [tentativa, setTentativa] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function carregarProdutos() {
      setCarregando(true);
      setErro('');

      try {
        const resposta = await axios.get('https://fakestoreapi.com/products', {
          signal: controller.signal,
          timeout: 15000,
        });

        if (!Array.isArray(resposta.data)) {
          throw new Error('Resposta inválida da API.');
        }

        const produtosComOferta = resposta.data.flatMap((produto) => {
          const oferta = ofertasDaApi.find((item) => item.id === produto.id);
          return oferta ? [{ ...produto, ...oferta }] : [];
        });

        if (!controller.signal.aborted) setProdutos([...produtosComOferta, ...produtosComplementares]);
      } catch (error) {
        if (!controller.signal.aborted) {
          setProdutos(ofertasBrasileiras);
          setErro('Não foi possível atualizar o catálogo. Exibindo a seleção salva com os preços consultados.');
        }
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }

    carregarProdutos();
    return () => controller.abort();
  }, [tentativa]);

  function adicionarProduto(produto) {
    setAdicionados((anteriores) => [produto, ...anteriores]);
  }

  const lista = [...adicionados, ...produtos];

  return (
    <>
      <ProductForm onAddProduct={adicionarProduto} />
      <section className="secao-produtos" aria-labelledby="titulo-produtos">
        <div className="flex align-items-center justify-content-between gap-2 mb-3">
          <h2 id="titulo-produtos">Produtos</h2>
          <span className="texto-apoio">{lista.length} {lista.length === 1 ? 'produto' : 'produtos'}</span>
        </div>
        <p className="texto-apoio nota-precos">
          Preços consultados em {DATA_CONSULTA}. Frete não incluído. Os valores podem mudar na loja de origem.
        </p>
        {carregando && <p role="status"><i className="pi pi-spin pi-spinner mr-2" aria-hidden="true" />Carregando produtos...</p>}
        {erro && (
          <div className="aviso-api">
            <p role="alert">{erro}</p>
            <Button label="Tentar novamente" icon="pi pi-refresh" onClick={() => setTentativa((valor) => valor + 1)} />
          </div>
        )}
        {!carregando && !erro && lista.length === 0 && <p>Nenhum produto encontrado.</p>}
        <div className="grid">
          {lista.map((produto) => (
            <div key={produto.id} className="col-12 md:col-6 lg:col-4">
              <ProductCard product={produto} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
