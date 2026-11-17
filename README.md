# geração tech store

Construindo uma mini loja virtual com react (geração tech store)

Atividade de React com Create React App, PrimeReact, PrimeIcons, PrimeFlex e Axios.

## Executar

Na pasta do projeto, instale as dependências:

```sh
npm install
```

Inicie a aplicação:

```sh
npm start
```

No Windows, use `npm.cmd install` e `npm.cmd start`. Abra o endereço informado no terminal, normalmente `http://localhost:3000`.

Para gerar a versão de produção:

```sh
npm run build
```

## Componentes

- `ProductList`: consulta `https://fakestoreapi.com/products` com Axios, seleciona os produtos que possuem ofertas brasileiras verificadas e organiza os itens adicionados pelo formulário.
- `ProductCard`: recebe um produto por props e apresenta imagem, nome, descrição e preço em um `Card` do PrimeReact.
- `ProductForm`: permite adicionar um produto com nome e preço. Imagem e descrição são opcionais.
- `App.css`: contém os estilos personalizados. As classes do PrimeFlex organizam os campos e os cards em colunas responsivas.

## Funcionamento

A aplicação consulta a Fake Store API e seleciona os produtos de IDs 9 e 10. O arquivo `src/data/ofertasBrasileiras.js` complementa esses produtos com nomes em português, fotos dos anúncios e preços consultados em lojas brasileiras. Os demais produtos da API não são exibidos porque não possuem preço brasileiro verificado neste projeto.

O catálogo inclui também seis produtos adicionais de lojas brasileiras, cadastrados em `produtosComplementares`. Esses seis itens não vêm da Fake Store API. A seleção completa contém oito produtos, além dos que forem incluídos pelo formulário.

Durante a consulta, a página informa que os produtos estão carregando. Se a API falhar, exibe uma mensagem, o botão Tentar novamente e os oito produtos da seleção salva no arquivo de ofertas. Se a API retornar uma lista vazia, os seis produtos complementares continuam disponíveis.

Os produtos cadastrados pelo formulário são mantidos no estado do React e aparecem no início da lista. Eles são removidos quando a página é recarregada. O formulário não envia uma requisição de cadastro à API.

A interface e a formatação dos preços estão em português do Brasil. Os preços da API não são convertidos nem usados como preços de venda: cada valor em reais vem do anúncio indicado no card. O preço de um produto incluído pelo formulário é o valor informado por quem o cadastrou.

## Fotos e preços

Consulta realizada em **17/11/2026**. Os preços são registros dessa consulta, sem atualização automática e sem frete. Consulte a loja de origem para conferir preço, pagamento e disponibilidade no momento da compra.

| Produto | Preço consultado | Condição | Fonte |
| --- | --- | --- | --- |
| HD externo WD Elements 2 TB | R$ 599,90 | À vista | [Via Tecnologia](https://viatecnologialoja.com.br/produtos/hd-externo-wd-elements-2tb/) |
| SSD SanDisk Plus 1 TB, SDSSDA-1T00-G27 | R$ 449,90 | Preço anunciado | [Connects Informática](https://connects.lojavirtualnuvem.com.br/produtos/ssd-1tb-sandisk/) |
| SSD Kingston A400 240 GB | R$ 129,90 | Preço anunciado | [Connects Informática](https://connects.lojavirtualnuvem.com.br/produtos/ssd-240gb-kingston/) |
| Pen drive Kingston DataTraveler 70 128 GB | R$ 99,90 | Preço anunciado | [Connects Informática](https://connects.lojavirtualnuvem.com.br/produtos/pen-drive-usb-3-2-datatraveler70-128gb/) |
| SSD Patriot P300 512 GB | R$ 329,90 | Preço anunciado | [Connects Informática](https://connects.lojavirtualnuvem.com.br/produtos/ssd-m-2-512gb-patriot/) |
| SSD SanDisk Plus 240 GB | R$ 165,00 | Preço anunciado | [Connects Informática](https://connects.lojavirtualnuvem.com.br/produtos/ssd-240gb-sandisk/) |
| Mousepad Exbom Dragão de Fogo | R$ 69,90 | Preço anunciado | [Via Tecnologia](https://viatecnologialoja.com.br/produtos/mousepad-70x35x03cm-dragao-de-fogo-mp7035c01-exbom/) |
| Monitor TCN LED 21,5 polegadas, 75 Hz | R$ 429,99 | Preço anunciado | [Via Tecnologia](https://viatecnologialoja.com.br/produtos/monitor-215-75hz-led-tcn/) |

As fotografias dos anúncios foram salvas em `public/produtos`, sem alterações. Créditos das imagens às respectivas lojas e fabricantes:

- [Fotografia do HD WD Elements na Via Tecnologia](https://dcdn-us.mitiendanube.com/stores/007/089/325/products/167086393712541973864359228992255455851-bfbc469ef77788f56f17829953235033-480-0.webp)
- [Fotografia do SSD SanDisk Plus na Connects Informática](https://dcdn-us.mitiendanube.com/stores/003/398/187/products/ssd-sandisk-1tb11-e084cbe6a47c37812316885669220088-480-0.webp)
- [Fotografia do SSD Kingston A400 na Connects Informática](https://dcdn-us.mitiendanube.com/stores/003/398/187/products/ssd-240gb-kingston1-269bfa60527b8f195316885676617217-480-0.webp)
- [Fotografia do pen drive Kingston na Connects Informática](https://dcdn-us.mitiendanube.com/stores/003/398/187/products/71d9frig6wl-_ac_sx679_1-5cb53f9be88645c0a616896120810521-480-0.webp)
- [Fotografia do SSD Patriot P300 na Connects Informática](https://dcdn-us.mitiendanube.com/stores/003/398/187/products/730249213_ssd-patriot-p300-512gb-jpg_21-5e83a7da4726c9cad616885793433131-480-0.webp)
- [Fotografia do SSD SanDisk Plus 240 GB na Connects Informática](https://dcdn-us.mitiendanube.com/stores/003/398/187/products/ssd-sandisk-1tb21-e084cbe6a47c37812316885770005950-480-0.webp)
- [Fotografia do mousepad Exbom na Via Tecnologia](https://dcdn-us.mitiendanube.com/stores/007/089/325/products/165701024333381596317620602257074336343-c73d015ee62ddf800617908858588273-480-0.webp)
- [Fotografia do monitor TCN na Via Tecnologia](https://dcdn-us.mitiendanube.com/stores/007/089/325/products/125303084569956838530537124687830198244-0d549f5a9976cff51817876686049752-480-0.webp)

## Conferir

1. Abra a aplicação e confira as fotos, os preços em reais e os links das ofertas. Se a API estiver indisponível, confira a mensagem e a seleção salva.
2. Adicione um produto chamado Caneca de cerâmica, com preço 12,90 e descrição Caneca branca para café. A imagem pode ficar vazia.
3. Confira o novo card no início da lista e a mensagem de confirmação.
4. Reduza a largura da janela para conferir a organização das colunas.

## Estrutura

```text
public/
  index.html
  produtos/
    hd-wd-elements-2tb.webp
    ssd-sandisk-plus-1tb.webp
    ssd-kingston-a400-240gb.webp
    pendrive-kingston-dt70-128gb.webp
    ssd-patriot-p300-512gb.webp
    ssd-sandisk-plus-240gb.webp
    mousepad-exbom-dragao.webp
    monitor-tcn-215.webp
src/
  index.js
  App.js
  App.css
  data/
    ofertasBrasileiras.js
  components/
    ProductList.js
    ProductCard.js
    ProductForm.js
```
