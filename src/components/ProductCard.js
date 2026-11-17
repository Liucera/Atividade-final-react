import { useState } from 'react';
import { Card } from 'primereact/card';

const formatoPreco = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export default function ProductCard({ product }) {
  const [imagemFalhou, setImagemFalhou] = useState(false);

  const imagem = (
    <div className="imagem-produto">
      {product.image && !imagemFalhou ? (
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          onError={() => setImagemFalhou(true)}
        />
      ) : (
        <div className="imagem-vazia" role="img" aria-label="Produto sem imagem">
          <i className="pi pi-image" aria-hidden="true" />
          <span>Sem imagem</span>
        </div>
      )}
    </div>
  );

  return (
    <article className="h-full">
      <Card
        className="cartao-produto h-full"
        header={imagem}
        title={<h3>{product.title}</h3>}
        footer={
          <div className="rodape-produto">
            <strong className="preco-produto">{formatoPreco.format(product.price)}</strong>
            {product.sourceUrl ? (
              <>
                <span className="condicao-preco">{product.condition}</span>
                <a href={product.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Consultar oferta na {product.store}
                  <i className="pi pi-external-link ml-2" aria-hidden="true" />
                </a>
              </>
            ) : (
              <span className="condicao-preco">Preço informado no cadastro</span>
            )}
          </div>
        }
      >
        <p className="descricao-produto">{product.description || 'Sem descrição.'}</p>
      </Card>
    </article>
  );
}
