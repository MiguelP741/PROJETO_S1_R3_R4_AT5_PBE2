import criarNavbar, {
    ativarMenu
} from './components/layout/navbar.component';

import {
    personagensPage
} from './pages/produtos/produtos.pages';

import {
    carrinhoPage
} from './pages/produtos/carrinho.pages';

criarNavbar();

personagensPage();

const btnHome = document.querySelector("#btnHome");

const btnCarrinho = document.querySelector("#btnCarrinho");

btnHome.addEventListener('click', () => {

    ativarMenu(btnHome);

    personagensPage();

});

btnCarrinho.addEventListener('click', () => {

    ativarMenu(btnCarrinho);

    carrinhoPage();

});