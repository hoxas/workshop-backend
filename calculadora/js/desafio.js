const inputValorHora = document.querySelector("#valor-hora");
const inputHorasProjeto = document.querySelector("#horas-projeto");
const resposta = document.querySelector("#resposta");
const botaoCalcular = document.querySelector("#botao-calcular");

const resultDiv = document.querySelector("#result");

const calcular = () => {
    const valorHora = Number(inputValorHora.value);
    const horasProjeto = Number(inputHorasProjeto.value);
    const calculo = valorHora * horasProjeto;
    animar(botaoCalcular, "animate__headShake");
    animar(resultDiv, "animate__flash");
    const resultado = "R$ " + calculo.toFixed(2).replace(".", ",");
    resposta.innerHTML = resultado;
};

const animar = (elementoHtml, classeAnimacao) => {
    elementoHtml.classList.add("animate__animated", classeAnimacao);
    setTimeout(() => {
        elementoHtml.classList.remove("animate__animated", classeAnimacao);
    }, 1000);
};
