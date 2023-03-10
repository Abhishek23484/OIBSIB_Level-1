function calculateTemp() {
  var temperature = document.getElementById("temp").value;
  var tempUnit = document.getElementById("temp_diff").value;

  if (tempUnit === "cel") {
    var convertedTemp = (temperature * 1.8) + 32;
    var resultString = temperature + "° Celsius = " + convertedTemp.toFixed(2) + "° Fahrenheit.";
  } else {
    var convertedTemp = (temperature - 32) / 1.8;
    var resultString = temperature + "° Fahrenheit =" + convertedTemp.toFixed(2) + " ° Celsius.";
  }

  document.getElementById("resultContainer").innerHTML = resultString;
}
