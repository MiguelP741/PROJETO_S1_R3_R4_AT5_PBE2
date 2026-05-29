export async function buscarPersonagens() {

    const resposta = await fetch(
        'http://localhost:3000/personagens'
    );

    return resposta.json();
}