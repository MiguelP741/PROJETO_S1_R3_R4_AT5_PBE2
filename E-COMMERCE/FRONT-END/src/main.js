import criarNavbar, {
    ativarMenu
} from './components/layout/navbar.component';

import {
    produtosPage
} from './pages/produtos/produtos.pages';

import {
    carrinhoPage
} from './pages/produtos/carrinho.pages';

criarNavbar();

produtosPage();

const btnHome = document.querySelector("#btnHome");

const btnCarrinho = document.querySelector("#btnCarrinho");

btnHome.addEventListener('click', () => {

    ativarMenu(btnHome);

    produtosPage();

});

btnCarrinho.addEventListener('click', () => {

    ativarMenu(btnCarrinho);

    carrinhoPage();

});