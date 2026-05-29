export default function criarNavbar() {

    const header = document.querySelector('header');

    const nav = document.createElement('nav');

    nav.className = 'navbar navbar-expand-lg bg-black border-bottom border-dark';

    nav.innerHTML = `

        <div class="container">

            <a class="navbar-brand fw-bold text-light fs-3" href="#">
                INFINITY
            </a>

            <button 
                class="navbar-toggler bg-light" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#menu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-center" id="menu">

                <ul class="navbar-nav mb-2 mb-lg-0">

                    <li class="nav-item">

                        <button 
                            class="nav-link active text-success fw-bold" 
                            id="btnHome"
                        >
                            Produtos
                        </button>

                    </li>

                    <li class="nav-item">

                        <button 
                            class="nav-link text-light" 
                            id="btnCarrinho"
                        >
                            Carrinho
                        </button>

                    </li>

                </ul>

            </div>

            <form class="d-flex">

                <input 
                    class="form-control bg-dark text-light border-dark" 
                    type="search" 
                    placeholder="Pesquisar"
                >

            </form>

        </div>

    `;

    header.appendChild(nav);
}

export function ativarMenu(botaoClicado){

    document.querySelectorAll('.nav-link').forEach(btn => {

        btn.classList.remove(
            'active',
            'text-success',
            'fw-bold'
        );

        btn.classList.add('text-light');

    });

    botaoClicado.classList.remove('text-light');

    botaoClicado.classList.add(
        'active',
        'text-success',
        'fw-bold'
    );

}