
let item = document.getElementById("botao");
let arr = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
 "s", "t", "u", "v", "w", "x", "y", "z"];


//calculo do fatorial de um número a
// retorna o fatorial
function fatorial(a) {
    var y = 1;
    var i = 1;
    while(i <= a){
        y *= i;
        i++;
    }
    // console.log(y)
    return y;
}

//calculo do enésimo número da sequência fibonacci;
function fibo(n){
    if(n == 1 || n == 2){
        // console.log(1)
        return 1;
    } else {
        // console.log(fibo(n - 1) + fibo(n - 2))
        return fibo(n - 1) + fibo(n - 2);
    }
}

// essa função se baseia na string do número e ira retirar dois caracteres de trás para frentes
// os caracteres serão inseridos em um array e por fim a função retornará o próprio array com os
//pares dos números
function doispordois(str){
    var array = [];
    str = "0" + str;
    console.log(str);
    for (var i = str.length; i > 1; i = i - 2){
        array.push(+str.slice(i - 2, i));
        } 
        console.log(array);
        return array;
}

//verificam os elementos números de um array x com os caracteres de posição equivalente 
//ao seu valor do array arr
function equipara(x){
    var array = [];
    for(element of x){
        if (element <= arr.length){
            array.push(arr[element]);
        } else{
            array.push(element);
        }
    }
    return array;
}

// essa função recebe o arr já equiparado e junta todos os elementos 
//em uma única string na ordem correta
function stringficarArray(arr){
    var resultado = "";

    for(i = arr.length - 1; i >= 0; i--){
        resultado += arr[i].toString();
        }
        console.log(resultado);
        document.getElementById("respArea").innerHTML = `<a href="http://gamasti.com.br/${resultado}">Acesse a página final</a>`
        return resultado;
    }

// executa as demais funções do código e resolve o problema da prova
function objetivo(){
    //recebem os valores que foram digitados nos elements input do html;
    var campo1 = document.getElementById("n1");
    var campo2 = document.getElementById("n2");
    //verifica se os campos foram preenchidos
    if(campo1.value == null || campo2.value == null || campo1.value == "" || campo2.value == ""){
        alert("Todos os campos devem estar preenchidos");
    } else{
    var soma = fatorial(campo1.value) + fibo(campo2.value);
    var array = equipara(doispordois(soma.toString()));
    stringficarArray(array);
    }
}

item.addEventListener("click", objetivo);
