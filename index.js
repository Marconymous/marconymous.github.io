const input = document.getElementById('input')
const history = document.getElementById('history')

const onInput = () => {
  let inputText = input.value

  let newParagraph = document.createElement('p')
  newParagraph.innerHTML = inputText
  history.appendChild(newParagraph)
  input.value = ''
}

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      onInput()
      event.preventDefault();
  }
});

