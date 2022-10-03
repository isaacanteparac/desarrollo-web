var count = 1;
var countColor = 1;
function addBox() {
  var contentBox = document.getElementById("contentBox");

  var box = document.createElement("div");
  box.className = "box";

  if (countColor == 1) {
    box.className += " colorBox1";
  } else if (countColor == 2) {
    box.className += " colorBox2";
  } else {
    box.className += " colorBox3";
    countColor = 0; 
  }
  countColor += 1;
  var texto = document.createTextNode(count);
  box.appendChild(texto);
  count += 1;
  contentBox.appendChild(box);
}
