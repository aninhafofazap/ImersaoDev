document.getElementById("convertButton").onclick = function () {
  var valorDolar = document.getElementById("valor").value;

  if (valorDolar <= 0) {
    alert("Por favor, insira um valor positivo.");
    return;
  }

  fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then((response) => response.json())
    .then((data) => {
      var cotacaoDolar = data.rates.BRL;
      var valorEmReais = valorDolar * cotacaoDolar;
      var resultado = document.getElementById("resultado");
      resultado.innerHTML =
        "O resultado em real é R$" + valorEmReais.toFixed(2);
    })
    .catch((error) => {
      console.error(error);
      alert("Não foi possível obter a cotação atual do dólar.");
    });
};
