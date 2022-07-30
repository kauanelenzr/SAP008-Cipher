import cipher from './cipher.js'; 

//Cifrar

const btCifragem = document.getElementById('botaoCifragem');

function cifrar() {
    let txtCifragem = document.getElementById('textoCifragem').value;
    txtCifragem = txtCifragem.toUpperCase();
    let offsetCifragem = parseInt(document.getElementById('deslocamentoCifragem').value);
    const respostaCifragem = cipher.encode(offsetCifragem, txtCifragem);
    document.getElementById('respostaCifragem').innerHTML = respostaCifragem;

} 

btCifragem.addEventListener("click", cifrar);

//Decifrar

const btDecifragem = document.getElementById('botaoDecifragem');

function decifrar() {
    let txtDecifragem = document.getElementById('textoDecifragem').value;
    txtDecifragem = txtDecifragem.toUpperCase();
    let offsetDecifragem = parseInt(document.getElementById('deslocamentoDecifragem').value);
    const respostaDecifragem = cipher.decode(offsetDecifragem, txtDecifragem);
    document.getElementById('respostaDecifragem').innerHTML = respostaDecifragem;
}

btDecifragem.addEventListener("click", decifrar);


