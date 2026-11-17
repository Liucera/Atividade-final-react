export const DATA_CONSULTA = '17/11/2026';

// Os IDs correspondem aos produtos da Fake Store API.
// Os preços abaixo foram consultados nas lojas indicadas, em reais.
export const ofertasDaApi = [
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

// Produtos adicionais consultados nas lojas brasileiras, fora da Fake Store API.
export const produtosComplementares = [
  {
    id: 'br-kingston-a400-240gb',
    title: 'SSD Kingston A400 240 GB',
    description: 'SSD SATA de 240 GB, modelo SA400S37/240G, com leitura de até 500 MB/s.',
    price: 129.9,
    image: `${process.env.PUBLIC_URL}/produtos/ssd-kingston-a400-240gb.webp`,
    store: 'Connects Informática',
    sourceUrl: 'https://connects.lojavirtualnuvem.com.br/produtos/ssd-240gb-kingston/',
    condition: 'Preço anunciado',
  },
  {
    id: 'br-kingston-dt70-128gb',
    title: 'Pen drive Kingston DataTraveler 70 128 GB',
    description: 'Pen drive de 128 GB com conexão USB-C e padrão USB 3.2 Gen 1. Modelo DT70/128GB.',
    price: 99.9,
    image: `${process.env.PUBLIC_URL}/produtos/pendrive-kingston-dt70-128gb.webp`,
    store: 'Connects Informática',
    sourceUrl: 'https://connects.lojavirtualnuvem.com.br/produtos/pen-drive-usb-3-2-datatraveler70-128gb/',
    condition: 'Preço anunciado',
  },
  {
    id: 'br-patriot-p300-512gb',
    title: 'SSD Patriot P300 512 GB',
    description: 'SSD de 512 GB no formato M.2 2280, com interface PCIe Gen 3 x4. Modelo P300P512GM28.',
    price: 329.9,
    image: `${process.env.PUBLIC_URL}/produtos/ssd-patriot-p300-512gb.webp`,
    store: 'Connects Informática',
    sourceUrl: 'https://connects.lojavirtualnuvem.com.br/produtos/ssd-m-2-512gb-patriot/',
    condition: 'Preço anunciado',
  },
  {
    id: 'br-sandisk-plus-240gb',
    title: 'SSD SanDisk Plus 240 GB',
    description: 'SSD SATA de 240 GB, modelo SDSSDA-240G-G26, com leitura de até 530 MB/s.',
    price: 165,
    image: `${process.env.PUBLIC_URL}/produtos/ssd-sandisk-plus-240gb.webp`,
    store: 'Connects Informática',
    sourceUrl: 'https://connects.lojavirtualnuvem.com.br/produtos/ssd-240gb-sandisk/',
    condition: 'Preço anunciado',
  },
  {
    id: 'br-mousepad-exbom-dragao',
    title: 'Mousepad Exbom Dragão de Fogo',
    description: 'Mousepad estampado de 70 × 35 cm e 3 mm de espessura. Modelo MP7035C01.',
    price: 69.9,
    image: `${process.env.PUBLIC_URL}/produtos/mousepad-exbom-dragao.webp`,
    store: 'Via Tecnologia',
    sourceUrl: 'https://viatecnologialoja.com.br/produtos/mousepad-70x35x03cm-dragao-de-fogo-mp7035c01-exbom/',
    condition: 'Preço anunciado',
  },
  {
    id: 'br-monitor-tcn-215',
    title: 'Monitor TCN LED 21,5 polegadas',
    description: 'Monitor LED de 21,5 polegadas com taxa de atualização de 75 Hz.',
    price: 429.99,
    image: `${process.env.PUBLIC_URL}/produtos/monitor-tcn-215.webp`,
    store: 'Via Tecnologia',
    sourceUrl: 'https://viatecnologialoja.com.br/produtos/monitor-215-75hz-led-tcn/',
    condition: 'Preço anunciado',
  },
];

export const ofertasBrasileiras = [...ofertasDaApi, ...produtosComplementares];
