let quantidadeCartas = 0;
let cartas = [];
let embaralhadas = [];
let intervalo;

const versosCartas = [
    "imgs/bobrossparrot.gif",
    "imgs/explodyparrot.gif",
    "imgs/fiestaparrot.gif",
    "imgs/metalparrot.gif",
    "imgs/revertitparrot.gif",
    "imgs/tripletsparrot.gif",
    "imgs/unicornparrot.gif"
]


function iniciarGame(){
    
    quantidadeCartas = Number(prompt('Com quantas cartas deseja jogar? Insira um número par, entre 4 e 14.'));

    if (quantidadeCartas >= 4 && quantidadeCartas <= 14 && quantidadeCartas %2 === 0){
       adicionarCartas(quantidadeCartas);
        intervalo = setInterval(cronometro, 1000);
    } else {
        alert('A quantidade deve ser um número par entre 4 e 14!');
        iniciarGame();
        
    }
}

iniciarGame();


function adicionarCartas(numero) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    cartas= [];


    for (let i = 0; i < numero/2 ; i++){
        cartas.push(`
        <li>
            <div onclick="virar(this)" class="card">
                <div class="front face"><img src="imgs/front.png" alt="Frente da carta"></div>
                <div class="back face"><img src=${versosCartas[i]} alt="Verso da carta"></div>
            </div>
        </li>
        `);
        cartas.push(`
        <li>
            <div onclick="virar(this)" class="card">
                <div class="front face"><img src="imgs/front.png" alt="Frente da carta"></div>
                <div class="back face"><img src=${versosCartas[i]} alt="Verso da carta"></div>
            </div>
        </li>
        `);

    }
    embaralhadas = cartas.sort(comparador);

    for (let i=0 ; i < embaralhadas.length ; i++){
      ul.innerHTML += embaralhadas[i];
   }
    
}

function comparador() { 
	return Math.random() - 0.5; 
}


let primeira;
let segunda;
let viradas = [];
let jogadas = 0;

function virar(clicada) {    
   // const endereco = clicada.classList;
   // endereco.toggle('virada');

   if (viradas.length === 0){
    if( clicada.classList.contains ('virada') === false){
        clicada.classList.add('virada');
        jogadas++;
        primeira = clicada;
        viradas.push(clicada.innerHTML);
       }
   }else if (viradas.length === 1){
    if (clicada.classList.contains ('virada') === false){
        clicada.classList.add('virada');
        jogadas++;
        segunda = clicada;
        viradas.push(clicada.innerHTML);        

        setTimeout(comparacaoDeCartas,1000)
    }
   }
}


let acertos = 0;

function comparacaoDeCartas() {
   
    if(viradas.length === 2){
        if( viradas[0] === viradas[1]){
            primeira = '';
            segunda = '';
            viradas = [];
            acertos++;
        } else {
            primeira.classList.remove('virada');
            segunda.classList.remove('virada');
            primeira = '';
            segunda = '';
            viradas = [];
        }
    }

    fimDeJogo();
}


function fimDeJogo(){

    if (acertos === quantidadeCartas/2){
        clearInterval(intervalo);
        alert(`Parabéns! Você ganhou em ${jogadas} jogadas! Seu tempo foi de ${segundos} segundos!`);
        
        const jogarNovamente = prompt("Deseja jogar novamente?");
        if (jogarNovamente === 'sim' || jogarNovamente === 'SIM' || jogarNovamente === 'Sim'){
            location.reload();
        }
    }
    
}

let segundos = 0;
function cronometro(){
    segundos++;
    const endereco = document.querySelector('.tempo');
    endereco.innerHTML = segundos;
}