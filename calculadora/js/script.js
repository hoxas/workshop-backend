const inputQtdMes = document.querySelector("#ganho-mes");
const inputHorasDia = document.querySelector("#horas-dia");
const diasMes = 22;
const resposta = document.querySelector("#resposta");

const calcularValorHora = () => {
    const qtdMes = Number(inputQtdMes.value);
    const horasDia = Number(inputHorasDia.value);
    const calculo = qtdMes / (horasDia * diasMes);
    const resultado = "R$ " + calculo.toFixed(2).replace(".", ",");
    resposta.innerHTML = resultado;
};
