const colors = ['red', 'blue', 'green', 'orange', 'purple', 'brown', 'pink', 'teal'];

function changeColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];

  const textElement = document.getElementById('myText');
  textElement.style.color = selectedColor;
}
