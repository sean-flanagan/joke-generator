const jokes = [
  { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  // ... (add more jokes here)
];

let isFlipped = false;
let currentJoke = getRandomJoke();

function getRandomJoke() {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
}

document.querySelector('.card-front p').innerText = currentJoke.setup;
document.querySelector('.card-back p').innerText = currentJoke.punchline;

document.querySelector('.card').addEventListener('click', function() {
  const cardInner = this.querySelector('.card-inner');
  const card = this;

  if (!isFlipped) {
    currentJoke = getRandomJoke();
    this.querySelector('.card-front p').innerText = currentJoke.setup;
    this.querySelector('.card-back p').innerText = currentJoke.punchline;
  }

  setTimeout(function() {
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    card.classList.toggle('card-flipped');
  }, 100);

  isFlipped = !isFlipped;
});
