/*Exercicio 1*/
function calcular(){
    var X = parseInt(document.getElementById("numeros").value);
    let exib = document.getElementById("exib");

    exib.innerHTML = "";

    for(let valor = 0 ; valor<11 ; valor++){
        var result = X * valor;
        document.getElementById("exib").innerHTML +="resultado: " + result + "<br>";
        console.log (X , " * " , valor , " = " , result );
    }
}

/*Exercicio 2*/
function decidir(){
    let n_entrada = parseFloat(document.getElementById("numero3").value);
    let exibi = document.getElementById("exibi");

    exibi.innerHTML= "";

   if(n_entrada > 0){
    document.getElementById("exibi").innerHTML += "o numero é positivo (+)";
   }else if(n_entrada < 0){
    document.getElementById("exibi").innerHTML += "o numero é negativo (-)";
   }else if(n_entrada === 0){
    document.getElementById("exibi").innerHTML += "o numero é nulo ( = 0)";
   }
}

/*Exercicio 3*/
function verificar(){
    let nume = Number(document.getElementById("nummm").value);
    let exibi = document.getElementById("exibs");

    exibi.innerHTML="";

    if(nume <= 1){
        document.getElementById("exibs").innerHTML="O numero:  " + nume +" não é primo!";
        return;
    }

    let primo = true;

    for( let i = 2; i<nume ; i++){
        if(nume % i === 0){
            primo = false
            break;
        }
    }

    if(primo){
        document.getElementById("exibs").innerHTML="O numero:  " + nume +" é primo!";
    }else{
        document.getElementById("exibs").innerHTML="O numero:  " + nume +" não é primo!";
    }
}

/*Exercicio 4*/

function classificar(){
    let T1 = parseFloat(document.getElementById("T1").value);
    let T2 = parseFloat(document.getElementById("T2").value);
    let T3 = parseFloat(document.getElementById("T3").value);

    if(T1<T2 && T1<T3 && T2<T3){
        document.getElementById("most").innerHTML="T1:Ouro , T2:Prata , T3:Bronze" 
    }else if(T1<T2 && T1<T3 && T2>T3){
        document.getElementById("most").innerHTML="T1:Ouro , T2:Bronze , T3:Prata"
    }else if(T1>T2 && T1<T3 && T2<T3){
        document.getElementById("most").innerHTML="T1:Prata , T2:Ouro , T3:Bronze"
    }else if(T1>T2 && T1>T3 && T2<T3){
        document.getElementById("most").innerHTML="T1:Bronze , T2:Ouro , T3:Prata"
    }else if(T1<T2 && T1>T3 && T2>T3){
        document.getElementById("most").innerHTML="T1:Prata , T2:Bronze , T3:Ouro"
    }else if(T1>T2 && T1>T3 && T2>T3){
        document.getElementById("most").innerHTML="T1:Bronze , T2:Prata , T3:Ouro"
    }
}

/*Exercicio 5*/

function descobrir() {
    let m = parseInt(document.getElementById("M").value);
    let a = parseInt(document.getElementById("A").value);
    let b = parseInt(document.getElementById("B").value);
    let terceiro = m - (a + b);

    if (isNaN(m) || isNaN(a) || isNaN(b)) {
        document.getElementById("s").innerHTML = "Preencha todos os campos.";
        document.getElementById("n").innerHTML = "";
        return;
    }

    if (a + b > m) {
        document.getElementById("s").innerHTML = "A soma das idades dos filhos é maior que a idade da mãe.";
        document.getElementById("n").innerHTML = "";
        return;
    }

      if (a + b == m) {
        document.getElementById("s").innerHTML = "As idades somam exatamente a idade da mãe — falta idade desconhecida (0).";
    } else {
        document.getElementById("s").innerHTML = "A idade desconhecida é: " + terceiro + " anos.";
    }

      let maisVelho = Math.max(a, b, terceiro);
      document.getElementById("n").innerHTML = "A idade do filho mais velho é: " + maisVelho + " anos.";
}