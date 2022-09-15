const input = document.getElementById('input')
const history = document.getElementById('history')
const WORKING_DIR = '~/marconymous > '
let sentCommands = []

with (input) {
  onblur = function (e) {
    var elm = e.target;
    setTimeout(function () { elm.focus() });
  }
  onkeydown = function (e) {
    var key = e.which || e.keyCode;
    if (key == 9) e.preventDefault();
  }
}

const onInput = () => {
  let inputText = input.value
  sentCommands.push(inputText)

  createConsoleOutput(inputText)
  setTimeout(() => {
    handleConsoleInput(inputText)
  }, 200)

  input.value = ''
}

input.addEventListener("keypress", (event) => {
  console.log(event.key)
  if (event.key === "Enter") {
    onInput()
    event.preventDefault();
  }
});

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    input.value = sentCommands[sentCommands.length - 1]
    event.preventDefault();
  }
})

const createConsoleOutput = (content) => {
  let newParagraph = document.createElement('p')
  newParagraph.classList.add('console-output')
  newParagraph.innerHTML = WORKING_DIR + content
  history.appendChild(newParagraph)
}

const responses = new Map([
  ["help", "Help Text"],
  ["eval", (args) => eval(args.join(' '))]
])
console.log(responses);
const handleConsoleInput = (content) => {
  const args = content.split(' ')


  let foundMatch = false

  for (const [key, value] of responses) {
    if (key.toLowerCase() === args[0].toLowerCase()) {
      if (typeof value === 'string' || value instanceof String) {
        createConsoleOutput(value)
      } else {
        value(args.filter((s) => s !== key))
      }
      foundMatch = true
    }
  }

  if (!foundMatch) {
    createConsoleOutput("Command not found! please type help to find out more :)")
  }
}