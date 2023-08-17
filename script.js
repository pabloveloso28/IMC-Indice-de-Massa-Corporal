const buttonCalcular = document.querySelector(".calcularButton")
const buttonLimpar = document.querySelector(".limparButton")

const calcularAgora = () => {

    const nome = document.querySelector(".nome").value;
    const altura = document.querySelector(".altura").value;
    const peso = document.querySelector(".peso").value;
    const resultado = document.querySelector(".resultado")

    if (nome !== "" && altura !== "" && peso !== "") {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        }
        else if (valorIMC < 25) {
            classificacao = 'com o peso normal.';
        }
        else if (valorIMC < 30) {
            classificacao = 'com sobrepeso.';
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.';
        }
        else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2.';
        }
        else {
            classificacao = ' com obesidade grau 3 (obesidade mórbida).';
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC}, você está ${classificacao}`;
    }
    else { resultado.textContent = 'Preencha Todos os Campos' }
}

const limparAgora = () => {

    document.querySelector(".nome").value = '';
    document.querySelector(".altura").value = '';
    document.querySelector(".peso").value = '';
    document.querySelector(".resultado").textContent = '';
}

buttonLimpar.addEventListener("click", limparAgora)
buttonCalcular.addEventListener("click", calcularAgora)