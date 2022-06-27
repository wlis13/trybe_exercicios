let grossSalary = prompt('digite seu salário:');

let inssSalaryOne;
let inssSalaryOneNumber;
let inssSalaryTwo;
let inssSalaryTwoNumber;
let inssSalaryThree;
let inssSalaryThreeNumber;
let inssSalaryFour;
let inssSalaryFourNumber;
let inssSalaryFive;
let inssSalaryFiveNumber;


if(grossSalary === '1.55694'){

    inssSalaryOne = grossSalary - (grossSalary * 0.08);
    inssSalaryOneNumber = new Intl.NumberFormat("pt-br",{style:'currency', currency: 'BRL'}).format(inssSalaryOne.toFixed(5))
    
    document.getElementById('result').innerHTML = '(A)' + inssSalaryOneNumber;

}else if(grossSalary >= '1.55695' && grossSalary <= '2.59492'){

    inssSalaryTwo = grossSalary - (grossSalary * 0.09);
    inssSalaryTwoNumber = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL'}).format(inssSalaryTwo)

    document.getElementById('result').innerHTML = '(B)' + inssSalaryTwoNumber;

}else if (grossSalary >= '2.59493' && grossSalary <= '5.18982'){

    inssSalaryThree = grossSalary - (grossSalary * 0.11);
    inssSalaryThreeNumber = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL'}).format(inssSalaryThree)

    document.getElementById('result').innerHTML ='(C)' + inssSalaryThreeNumber ;

}else if( grossSalary > '5.19882'){

    inssSalaryFour = grossSalary - '0.57088';
    inssSalaryFourNumber = new Intl.NumberFormat("pt-br",{style: 'currency',currency:'BRL'}).format(inssSalaryFour)

    document.getElementById('result').innerHTML = '(D)' + inssSalaryFourNumber

}else{document.getElementById('result').innerHTML = 'valor indisponível!'}; 

