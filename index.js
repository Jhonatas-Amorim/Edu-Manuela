let num1, num2;

let tentativas = 0;
let acertos = 0;

const txt = document.createElement('h2');

function sortear(){
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('calculo').innerHTML = `<div class="calc"><div class="left">${num1}</div>X<div class="rigth">${num2}</div>=<input id="uservalue" type="number" class="uservalue"></div>`
    const bbt = document.getElementById("bbt");
    bbt.removeAttribute("hidden");
    let bbtiniciar = document.getElementById('iniciar');
    bbtiniciar.setAttribute('hidden', 'true');
};

function calcular(){
    if(tentativas < 10){
        let nUser = document.querySelector(".uservalue").value;
        let mult = num1 * num2;
        if(nUser === ""){
            alert("Insira um número de resposta!!")
        }else if(nUser == mult){
            tentativas++;
            acertos++;
            sortear()
            document.getElementById('container').appendChild(txt);
            txt.textContent = "Parabéns!!"
        }else{
            tentativas++;
            sortear()
            document.getElementById('container').appendChild(txt);
            txt.textContent = "Errado!!"
        }
    }else{
        let percentual = (acertos / tentativas)*100;
        document.getElementById('container').appendChild(txt);
        txt.textContent = `Seu desempenho é de ${percentual}%.`
    }
    
} 
