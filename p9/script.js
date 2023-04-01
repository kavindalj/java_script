function main() {
  let card;
  do {
    card = Math.floor((Math.random() * 100) / 7.6);
  } while (card == 0);

  var img = document.createElement("img");
  img.src = "images/" + card + ".png";
  img.height = 300;

  document.body.appendChild(img);

  let total = document.getElementById("total").innerHTML;
  document.getElementById("total").innerHTML = parseInt(total) + card;
  total = parseInt(document.getElementById("total").innerHTML);

  if (total < 21) {
    document.getElementById("mainResult").innerHTML = "Generate Anothe Card";
  } else if (total > 21) {
    document.getElementById("mainResult").innerHTML = "You Lost";
    document.getElementById("resetBtn").style.display = "block";
    document.getElementById("genBtn").style.display = "none";
  } else {
    document.getElementById("mainResult").innerHTML = "You Won";
    document.getElementById("resetBtn").style.display = "block";
    document.getElementById("genBtn").style.display = "none";
  }
}
function reset() {
  location.reload();
}
