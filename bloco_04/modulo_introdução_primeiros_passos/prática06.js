alert('digite o nome de qualquer peça de xadrez, que são: \n rei, rainha, torre, bispo, covalo ou peão' )
let nomeDaPeca = prompt('digite o nome de uma peça de xadrez');

let nome = nomeDaPeca.toLocaleLowerCase();

switch(nome){
    case 'rei':
        document.getElementById('resultado').innerHTML = ' O (REI) move-se para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance.';
        break;
    case 'rainha':
        document.getElementById('resultado').innerHTML ='Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.';
        break;
    case 'torre':
        document.getElementById('resultado').innerHTML ='movimenta-se em direção reta pelas colunas ou fileiras';
        break;
    case 'bispo':
        document.getElementById('resultado').innerHTML ='Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.';
        break;
    case 'cavalo':
        document.getElementById('resultado').innerHTML ='É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo  Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.  Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.';
        break;
    case 'peão':
        document.getElementById('resultado').innerHTML ='movimenta-se apenas uma casa para frente e captura outros peões e peças em diagonal.';
        break;
    default:
        document.getElementById('resultado').innerHTML ='Essa peça não esta cadastrada!'
};
