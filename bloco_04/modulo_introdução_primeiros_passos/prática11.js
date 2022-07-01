let grossSalary = prompt('digite seu salário conforme exemplo: (1500.00)');


let inssSalaryOne;
let inssSalaryOneNumber;
let inssSalaryTwo;
let inssSalaryTwoNumber;
let inssSalaryThree;
let inssSalaryThreeNumber;
let inssSalaryFour;
let inssSalaryFourNumber;




if(grossSalary === '1556.94'){

    inssSalaryOne = grossSalary - (grossSalary * 0.08);
    inssSalaryOneNumber = new Intl.NumberFormat("pt-br",{style:'currency', currency: 'BRL',minimumFractionDigits:2}).format(inssSalaryOne)
  
    document.getElementById('result').innerHTML = '(A)' + inssSalaryOneNumber;

}else if(grossSalary >= '1556.95' && grossSalary <= '2594.92'){

    inssSalaryTwo = grossSalary - (grossSalary * 0.09);

    inssSalaryTwoNumber = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL', minimumFractionDigits:2}).format(inssSalaryTwo)
   
 
    document.getElementById('result').innerHTML = '(B)' + inssSalaryTwoNumber;

}else if (grossSalary >= '2594.93' && grossSalary <= '5189.82'){

    inssSalaryThree = grossSalary - (grossSalary * 0.11);
    inssSalaryThreeNumber = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL',minimumFractionDigits:2}).format(inssSalaryThree)

    document.getElementById('result').innerHTML ='(C)' + inssSalaryThreeNumber ;

}else if( grossSalary > '5198.82'){

    inssSalaryFour = grossSalary - '0570.88';

    inssSalaryFourNumber = new Intl.NumberFormat("pt-br",{style: 'currency',currency:'BRL',minimumFractionDigits:2}).format(inssSalaryFour)

    document.getElementById('result').innerHTML = '(D)' + inssSalaryFourNumber

}else{document.getElementById('result').innerHTML = 'valor indisponível!'}; 

























