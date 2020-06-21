//criar funcao
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    //link e formula
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
