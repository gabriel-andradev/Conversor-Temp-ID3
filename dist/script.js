function ConverterF() {
  var valorElemento = document.getElementById("graus");

  var valor = valorElemento.value;
  var valorEmFNumerico = parseFloat(valor);

  var valorEmF = (valorEmFNumerico * 9) / 5 + 32;
  var resultadoF = valorEmF.toFixed(0);
  var elementoValorConvertidoF = document.getElementById("grausConvertido");
  var valorConvertidoEmF = valor + "ºC são " + resultadoF + "ºF";
  elementoValorConvertidoF.innerHTML = valorConvertidoEmF;
}

function ConverterC() {
  var valorElemento = document.getElementById("graus");

  var valor = valorElemento.value;
  var valorEmCNumerico = parseFloat(valor);

  var valorEmC = (5 / 9) * (valorEmCNumerico - 32);
  var resultadoC = valorEmC.toFixed(0);
  var elementoValorConvertidoC = document.getElementById("grausConvertido");
  var valorConvertidoEmC = valor + "ºF são " + resultadoC + "ºC";
  elementoValorConvertidoC.innerHTML = valorConvertidoEmC;
}