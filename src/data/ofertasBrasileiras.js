export const DATA_CONSULTA = '17/11/2026';

// Os IDs correspondem aos produtos da Fake Store API.
// Os preços abaixo foram consultados nas lojas indicadas, em reais.
export const ofertasBrasileiras = [
  {
    id: 9,
    title: 'HD externo WD Elements 2 TB',
    description: 'HD portátil WD Elements, com capacidade de 2 TB e conexão USB 3.0.',
    price: 599.9,
    image: `${process.env.PUBLIC_URL}/produtos/hd-wd-elements-2tb.webp`,
    store: 'Via Tecnologia',
    sourceUrl: 'https://viatecnologialoja.com.br/produtos/hd-externo-wd-elements-2tb/',
    condition: 'À vista',
  },
  {
    id: 10,
    title: 'SSD SanDisk Plus 1 TB',
    description: 'SSD SATA III de 1 TB, modelo SDSSDA-1T00-G27. Leitura de até 535 MB/s.',
    price: 449.9,
    image: `${process.env.PUBLIC_URL}/produtos/ssd-sandisk-plus-1tb.webp`,
    store: 'Connects Informática',
    sourceUrl: 'https://connects.lojavirtualnuvem.com.br/produtos/ssd-1tb-sandisk/',
    condition: 'Preço anunciado',
  },
];
