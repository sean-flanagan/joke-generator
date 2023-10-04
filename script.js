const jokes = [
  { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  // ... (add more jokes here)
{ setup: "What comes once in a minute, twice in a moment, but never in a thousand years?", punchline: "The letter 'M'" },
  { setup: "What has keys but can't open locks?", punchline: "A piano" },
  { setup: "What has a heart that doesn't beat?", punchline: "An artichoke" },
  { setup: "What has a neck but no head?", punchline: "A bottle" },
  { setup: "What comes down but never goes up?", punchline: "Rain" },
  { setup: "What begins and has no end?", punchline: "Time" },
  { setup: "What has one eye but can't see?", punchline: "A needle" },
  { setup: "What is so fragile that saying its name breaks it?", punchline: "Silence" },
  { setup: "What has to be broken before you can use it?", punchline: "An egg" },
  { setup: "What gets wetter as it dries?", punchline: "A towel" },
  { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "Why did the chicken cross the road?", punchline: "To get to the other side!" },
  { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
  { setup: "How do you organize a space party?", punchline: "You planet!" },
  { setup: "What did one wall say to the other?", punchline: "I'll meet you at the corner!" },
  { setup: "Why did the music teacher go to jail?", punchline: "Because she got caught with too many sharp objects!" },
  { setup: "What do you call fake spaghetti?", punchline: "An impasta!" },
  { setup: "Why couldn’t the bicycle stand up by itself?", punchline: "Because it was two-tired!" },
  { setup: "Why did the math book look sad?", punchline: "Because it had too many problems." },
  { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
  { setup: "What's orange and sounds like a parrot?", punchline: "A carrot!" },
];
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
