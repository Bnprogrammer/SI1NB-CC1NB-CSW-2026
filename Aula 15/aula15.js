var IssoEumaString = "Isso é uma String";
let IssoEumNumero = 42;
const IssoEumBooleano = true;
let IssoTambemEumaString = "42";

//verifica se as strings são iguals de acordo com o "==="
if (IssoEumNumero === IssoTambemEumaString) {
    console.log("As String são iguais");
} else {
    console.log("As Strings são diferentes");
}

console.log (IssoEumNumero + IssoTambemEumaString)

console.log (IssoEumNumero + IssoEumNumero)

var IssoEumaGlobal = "Eu sou uma variável global"
{
    let IssoEumaLocal = "Eu sou uma variável local"
    console.log(IssoEumaGlobal);
    console.log(IssoEumaLocal);
}

console.log(IssoEumaGlobal);
//console.log(IssoEumaLocal); //Isso causará um erro, pois a variável IssoEumaLocal não está definido fora do bloco

let floatvalue1 = 0.06
let floatvalue2 = 0.01 
let sum = floatvalue1 + floatvalue2

console.log (sum.toPrecision (2)); //Isso pode resultar em 0.0700000000000000001 devido à precisão dos números de ponto flutuante

//Verificador de números pares (se troca o laço "0" para "1" identificamos o número impar) 
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Verificador de números impares usando while
let j = 0;
while (j < 5) {
    console.log(j*2+1);
    j++;
}

//Números primos de 0 a 100
for (n = 2; n <= 100; n++) {
    let nPrimo = true

    for (let i = 2; i < n; i++) {
        if (i % n)
    }
}
