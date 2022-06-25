let nota =   Number(prompt('digite aqui o valor em porcentagem da nota:'));

if(nota > 100 || nota < 0){
    document.getElementById('resultado').innerHTML = 'valor incorreto';

}else if(nota >= 90){
    document.getElementById('resultado').innerHTML ='nota (A)';
    
}else if(nota >= 80){
    document.getElementById('resultado').innerHTML ='nota (B)';

}else if(nota >= 70){
    document.getElementById('resultado').innerHTML ='nota (C)';

}else if(nota >= 60){
    document.getElementById('resultado').innerHTML ='nota (D)';

}else if(nota >= 50){
    document.getElementById('resultado').innerHTML ='nota (E)';

}else if(nota < 50){
    document.getElementById('resultado').innerHTML ='nota (F)';
}














