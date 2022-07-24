const inputValorHora = document.querySelector("#valor-hora");
const inputHorasProjeto = document.querySelector("#horas-projeto");
const resposta = document.querySelector("#resposta");

const calcular = () => {
    const valorHora = Number(inputValorHora.value);
    const horasProjeto = Number(inputHorasProjeto.value);
    const calculo = valorHora * horasProjeto;
    const resultado = "R$ " + calculo.toFixed(2).replace(".", ",");
    resposta.innerHTML = `Esse projeto custará: ${resultado}`;
};
