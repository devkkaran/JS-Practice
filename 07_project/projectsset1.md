# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 `Color Scheme Switcher 🔥`
### Original Code
```javascript
let buttons = document.querySelectorAll('.button');
// let body = document.body;
let body = document.querySelector('body');
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```
### My Code

```
let buttons = document.querySelectorAll('.button');
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    let colorcode = e.target.id;
    console.log(colorcode);

    document.body.style.backgroundColor = `${colorcode}`;
  });
});

```
## Project 2  ``BMI Calculator ☕️``
### Original Code

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```
### My Code

```
const form = document.querySelector('form');
const data = function (event) {
  return function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    console.log(typeof weight);

    if (height < 0 || height === '' || isNaN(height)) {
      document.querySelector('#results').innerHTML =
        'Please Enter Valid Height Value';
    } else if (weight < 0 || weight === '' || isNaN(weight)) {
      document.querySelector('#results').innerHTML =
        'Please Enter Valid Weight Value';
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      document.querySelector('#results').innerHTML = `<span>${bmi}</span>`;
    }
  };
};

form.addEventListener('submit', data); // We  Can use like this or here we use return function
form.addEventListener('submit', data());

```
## Project 3  ``Digital clock 😎``
### Original Code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
### My Code

```
const clock = document.getElementById('clock');
console.log(clock);

// In JavaScript, when you use the setInterval() function, it returns a unique identifier, commonly referred to as the "interval ID." This ID is a number that represents the specific interval you’ve created. You can use this ID to manage the interval, such as clearing it if you want to stop the repeated execution of the function.

const time = setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// clearInterval(time);


```
## Project 4  ``Guess the number 🤨``
### Original Code

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}


function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

### My Code

```
const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const guessField = document.querySelector('#guessField');
const subt = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');
const p = document.createElement('p');
let playGame = true;
let numGuess = 1;
let value = [];
if (true) {
  subt.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = guessField.value;
    console.log(typeof guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (guess < 1 || isNaN(guess) || guess > 100) {
    alert('Please Enter Valid Value');
  } else if (numGuess === 11) {
    displayMsg('Your 10 Round is Complete');
    cleanUpguess(guess);
    endGame();
  } else {
    checkGuess(guess);
    cleanUpguess(guess);
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg('WINNER WINNER CHICKEN DINNER!!!');
  } else if (guess < randomNumber) {
    displayMsg('Your Number Is TOO Low!');
  } else if (guess > randomNumber) {
    displayMsg('Your Number is Too High');
  }
}
function cleanUpguess(guess) {
  guessField.value = '';
  // guessSlot.innerHTML += guess + '';
  value.push(guess);
  guessSlot.innerHTML = value;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  guessField.setAttribute('disabled', '');
  p.innerHTML = '<h2> Start New Game</h2>';
  resultParas.appendChild(p);
  p.classList.add('button');
  console.log(p.classList);
  newGame();
}

function displayMsg(text) {
  lowOrHi.innerHTML = `<h2> ${text} </h2>`;
}

function newGame() {
  p.addEventListener('click', function (e) {
    guessField.removeAttribute('disabled');
    value = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = 10;
  });
}



```


## Project 4  ``Keyboard check 👻``

```javascript
window.addEventListener('keydown', function (e) {
  const key = document.querySelector('.key');
  key.innerHTML = `
  <table>
  <tr> 
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr> 
  <td>${e.key === ' ' ? 'Space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>

  </table>
  `;

  console.log(e);
});



```