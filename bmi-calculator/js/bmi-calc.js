const weight = document.getElementById("weight");
const height = document.getElementById("height");
const errorWeight = document.getElementById("error-weight");
const errorHeight = document.getElementById("error-height");
const btnCalculate = document.querySelector("#btn-calculate");
const formBMI = document.getElementById("bmiCalculator");
const result = document.querySelector("#result");

const showError = (domError, input, bgColor, errorText, borderStyle) => {
  domError.style.backgroundColor = bgColor;
  domError.innerHTML = errorText;
  input.style.border = borderStyle;
};
const disableBtnCalculate = () => {
  btnCalculate.setAttribute("class", "disabled");
  btnCalculate.setAttribute("disabled", "");
};
const enableBtnCalculate = () => {
  btnCalculate.classList.remove("disabled");
  btnCalculate.removeAttribute("disabled");
};

weight.addEventListener("input", () => {
  weight.value = parseInt(weight.value);

  if (weight.value > 300) {
    showError(errorWeight, weight, "red", "Berat badan yang anda masukkan terlalu besar", "5px solid red");
    disableBtnCalculate();
  } else if (weight.value == 0 || weight.value == "") {
    showError(errorWeight, weight, "red", "Berat badan tidak boleh kosong", "5px solid red");
    disableBtnCalculate();
  } else {
    showError(errorWeight, weight, "", "", "");
    enableBtnCalculate();
  }
});

height.addEventListener("input", () => {
  height.value = parseInt(height.value);
  if (height.value > 250) {
    showError(errorHeight, height, "red", "Tinggi badan yang anda masukkan terlalu besar", "5px solid red");
    disableBtnCalculate();
  } else if (height.value == 0 || height.value == "") {
    showError(errorHeight, height, "red", "Tinggi badan tidak boleh kosong", "5px solid red");
    disableBtnCalculate();
  } else {
    showError(errorHeight, height, "", "", "");
    enableBtnCalculate();
  }
});

const calculateBMI = (event) => {
  event.preventDefault();
  let BMI = weight.value / (height.value / 100) ** 2;
  BMI = Math.round(BMI * 10) / 10;
  let isNormal = "";
  let color = "";
  if (BMI <= 18.5) {
    isNormal = "Underweight";
    color = "text-red";
  } else if (BMI > 18.5 && BMI <= 24.9) {
    isNormal = "Normal Weight";
    color = "";
  } else if (BMI >= 25 && BMI <= 30) {
    isNormal = "Over Weight";
    color = "text-red";
  } else if (BMI > 30) {
    isNormal = "Obesity";
    color = "text-red";
  }

  console.log(Math.round(BMI * 10) / 10);
  result.innerHTML = `Your BMI is <b class="text-red">${BMI}</b> which means You are <b class="${color}">${isNormal}<b/>`;
};

btnCalculate.onclick = calculateBMI;
