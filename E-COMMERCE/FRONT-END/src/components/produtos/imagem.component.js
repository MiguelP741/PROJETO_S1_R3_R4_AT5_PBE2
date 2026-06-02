export default function criarImagemProduto(produto) {
    const img = document.createElement('img');

    img.className = 'card-img-top img-fluid'; 
    img.alt = produto.NomeProduto || 'Imagem do Produto'; 

    img.style.height = '360px';
    img.style.objectFit = produto.Imagem ? 'cover' : 'contain'; 

    img.src = produto.Imagem 
        ? `http://localhost:8000${produto.Imagem}` 
        : '/public/default-character.png'; 

    return img;
}