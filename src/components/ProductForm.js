import { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function ProductForm({ onAddProduct }) {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');
  const [mensagem, setMensagem] = useState(null);

  function adicionarProduto(evento) {
    evento.preventDefault();

    if (!nome.trim() || !Number.isFinite(preco) || preco <= 0) {
      setMensagem({ erro: true, texto: 'Preencha o nome e informe um preço maior que zero.' });
      return;
    }

    if (imagem.trim() && !/^https?:\/\//i.test(imagem.trim())) {
      setMensagem({ erro: true, texto: 'Use um endereço de imagem que comece com http:// ou https://.' });
      return;
    }

    onAddProduct({
      id: `local-${crypto.randomUUID()}`,
      title: nome.trim(),
      price: preco,
      description: descricao.trim(),
      image: imagem.trim(),
    });

    setNome('');
    setPreco(null);
    setDescricao('');
    setImagem('');
    setMensagem({ erro: false, texto: 'Produto adicionado à lista.' });
  }

  return (
    <section aria-labelledby="titulo-formulario">
      <Card className="cartao-formulario">
        <h2 id="titulo-formulario">Adicionar produto</h2>
        <p className="texto-apoio">Os produtos adicionados ficam na lista até a página ser atualizada.</p>
        <form onSubmit={adicionarProduto}>
          <div className="grid">
            <div className="col-12 md:col-8 campo-produto">
              <label htmlFor="nome">Nome do produto</label>
              <InputText id="nome" value={nome} onChange={(evento) => setNome(evento.target.value)} required />
            </div>
            <div className="col-12 md:col-4 campo-produto">
              <label htmlFor="preco">Preço (R$)</label>
              <InputNumber
                inputId="preco"
                value={preco}
                onValueChange={(evento) => setPreco(evento.value)}
                locale="pt-BR"
                mode="currency"
                currency="BRL"
                min={0}
                minFractionDigits={2}
                maxFractionDigits={2}
                required
              />
            </div>
            <div className="col-12 md:col-6 campo-produto">
              <label htmlFor="imagem">Endereço da imagem (opcional)</label>
              <InputText id="imagem" type="url" value={imagem} onChange={(evento) => setImagem(evento.target.value)} placeholder="https://..." />
            </div>
            <div className="col-12 md:col-6 campo-produto">
              <label htmlFor="descricao">Descrição (opcional)</label>
              <InputTextarea id="descricao" value={descricao} onChange={(evento) => setDescricao(evento.target.value)} rows={2} />
            </div>
          </div>
          <Button type="submit" label="Adicionar produto" icon="pi pi-plus" className="botao-adicionar" />
          {mensagem && (
            <p role={mensagem.erro ? 'alert' : 'status'} className={mensagem.erro ? 'texto-erro' : 'texto-sucesso'}>
              {mensagem.texto}
            </p>
          )}
        </form>
      </Card>
    </section>
  );
}
