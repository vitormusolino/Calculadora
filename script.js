var resultado = document.getElementById('resultado')

function somar(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var soma = n1 + n2

    //Saída
    resultado.innerText = `A soma é ${soma}`
}

function subtracao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var subtracao = n1 - n2

    //Saída
    resultado.innerText = `A subtração é ${subtracao}`
}

function multiplicacao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var multiplicacao = n1 * n2

    //Saída
    resultado.innerText = `A mulilicação é ${multiplicacao}`
}

function divisao(){
    //Entrada
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);

    //Processamento
    var divisao = n1 / n2

    //Saída
    resultado.innerText = `A divisão é ${divisao}`
}