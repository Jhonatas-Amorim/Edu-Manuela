const nome = ['abacaxi','avião','cachorro','camisa','carro','casa','gato','homem','leão','livro','maça','macaco','mulher','ônibus','prédio','saia','sofá'];

let nomeSorteado;

let resultadoNome = document.createElement('h2');

function sortearArray(){
    const indiceArray = Math.floor(Math.random() * nome.length);
    return nome[indiceArray];
};

function botao(){
    nomeSorteado = sortearArray();
    document.getElementById('container').innerHTML = `<img src="/img/${nomeSorteado}.png" alt="">`;
    let txt = document.getElementById('nome');
    txt.removeAttribute('hidden');
    let func = document.getElementById('func');
    func.removeAttribute('hidden');
}



function verificar(){
    let nomeUser = document.getElementById('nome').value;
    if(nomeUser == nomeSorteado){
        botao()
        document.getElementById('resultado').appendChild(resultadoNome);
        resultadoNome.textContent = "Parabéns !!!"
        resultadoNome.style.color = 'green';

    }else{
        botao()
        document.getElementById('resultado').appendChild(resultadoNome);
        resultadoNome.textContent = "Errado !!!"
        resultadoNome.style.color = 'red';
    }
}


