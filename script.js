let quantidadeCartas = 0;
const cartas = [];
let embaralhadas = [];


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
    quantidadeCartas = Number(prompt('com quantas cartas deseja jogar?'));

    if (quantidadeCartas >= 4 && quantidadeCartas <= 14 && quantidadeCartas %2 === 0){
       adicionarCartas(quantidadeCartas);
    } else {
        alert('A quantidade deve ser um número par entre 4 e 14!');
        iniciarGame();
        
    }
}
iniciarGame();



function adicionarCartas(numero) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';


    for (let i = 0; i < numero ; i = i +2){
        cartas.push(`
        <li>
            <div class="card">
                <div class="front face"><img src="imgs/front.png" alt="Frente da carta"></div>
                <div class="back face"><img src=${versosCartas[i]} alt="Verso da carta"></div>
            </div>
        </li>
        `);
        cartas.push(`
        <li>
            <div class="card">
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