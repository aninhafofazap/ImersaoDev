document.getElementById("convertButton").onclick = function () {
  var valorCotacao = document.getElementById("cotacao").value;
  var valorDolar = document.getElementById("valor").value;

  if (valorCotacao < 0) {
    valorCotacao = Math.max(valorCotacao, 0);
  }
  if (valorDolar < 0) {
    valorDolar = Math.max(valorDolar, 0);
  }

  var valorEmReais = valorDolar * valorCotacao;
  var valorEmReais = valorEmReais.toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$" + valorEmReais;

  elementoValorConvertido.innerHTML = valorConvertido;
};
