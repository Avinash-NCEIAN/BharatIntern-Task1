function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum*1.8)+32;
  }