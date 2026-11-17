import axios from 'axios';

// Cliente HTTP da Geracao Tech API, conectado ao serviço externo de produtos.
const geracaoTechApi = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 15000,
});

export default geracaoTechApi;
