var values = [0, 0, 0]

function generateColor() {
  return Math.floor(Math.random() * 255);
}

function setBackGroundColor() {
  console.log('Function called');

  for (i = 0; i < values.length; i++) {
    values[i] = generateColor();
  }
  console.log('R : ' + values[0]);
  console.log('G : ' + values[1]);
  console.log('B : ' + values[2]);
  value = 'rgb(' + values[0] + ', ' + values[1] + ', ' + values[2] + ')';
  document.body.style.backgroundColor = value;
  console.log('BackgroundColor changed');
  document.getElementById("colorValue").innerHTML = value;
  console.log('Text changed');
  if (changeTextColor()) {
    console.log('Text Color changed');
  }
}

function changeTextColor() {
  c = 0;
  for (i = 0; i < values.length; i++) {
    if (values[i] <= 128)
      c++;
  }

  if (c >= 2) {
    document.getElementById("colorValue").style.color = "#fff";
    return true;
  }
  return false;
}
