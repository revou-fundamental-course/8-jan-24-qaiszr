function calculate() {
    var sideLength = document.getElementById("sideLength").value;
    sideLength = parseFloat(sideLength);

    var perimeter = 4 * sideLength;
    var area = sideLength * sideLength;

    var resultText = "Keliling: " + perimeter + "<br>Luas: " + area;
    document.getElementById("result").innerHTML = resultText;
  }


  function resetForm() {
    document.getElementById("sideLength").value = "";
    document.getElementById("result").innerHTML = "";
  }