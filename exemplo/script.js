const inputAno = document.querySelector("#ano");
const inputValor = document.querySelector("#resultado");

let calc = 2000 + 20 + 2;
inputAno.value = calc;

const cliquei = () => {
    const calc = inputAno.value;
    resultado.innerHTML = calc;
};
