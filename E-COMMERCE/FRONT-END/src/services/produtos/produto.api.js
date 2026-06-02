import axios from 'axios';

const API_URL = 'http://localhost:8000/produtos'; 

export async function buscarProdutos() {
  try {
    const resposta = await axios.get(API_URL);
    return resposta.data.result; 
  } catch (erro) {
    console.error('Erro ao buscar produtos:', erro);
    return [];
  }
}
