// tiles
const wpmTile = document.querySelector(".tile_wpm");
const accuracyTile = document.querySelector(".tile_accuracy");
const timeTile = document.querySelector(".tile_time-remaining");

// text area
const textAreaInput = document.querySelector(".text-area__input");
const textAreaText = document.querySelector(".text-area__text");

// restart
const resetButton = document.querySelector(".reset");

// keyboard
const keys = document.querySelectorAll(".key");

// const word template
const word = document.querySelector("#word-template").content;

// valid keys

const validInputKeys =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz[];',./";

const ingoredkeys = ["Shift", "CapsLock"];

const punctuationOrSpace = ",.; ";

const paragraphs = [
  `The sun sets over the ocean, painting the sky in beautiful colors of orange, pink, and purple. It's a peaceful moment that reminds us of the world's natural beauty.`,
  `The sound of rain tapping on the window is soothing, as if nature is playing its own lullaby. It brings a sense of calm and reminds us to slow down and relax.`,
  `Trees are nature's skyscrapers, standing tall with roots deep in the earth. They give us oxygen, shelter, and shade, and remind us of the importance of growth.`,
  `Synchronicity is when things happen in a way that seems connected but maybe aren't supposed to be. It's like when you're thinking about someone, and then they call you out of the blue.`,
  `Innovation is the process of turning new ideas into reality. It takes creativity, effort, and a willingness to challenge the status quo in order to make a difference.`,
  `The top eateries aren't just places where you eat food. They're special spots that make you feel good and remember the food for a long time.`,
  `The big water that covers most of our world is called the ocean. It is very big and very deep, with many different kinds of animals and plants living inside it.`,
  `ChatGPT is a clever computer program that talks with people like me. It knows a lot of things and can help with questions or just have a chat.`,
  `The ocean waves crash against the shore with rhythmic precision, a reminder of the power and beauty of nature's forces. The vastness of the sea is humbling.`,
];

const getRandomParagraph = () => {
  return paragraphs[Math.floor(Math.random() * paragraphs.length)].split(" ");
};

export {
  wpmTile,
  accuracyTile,
  timeTile,
  textAreaInput,
  textAreaText,
  getRandomParagraph,
  validInputKeys,
  resetButton,
  paragraphs,
  ingoredkeys,
  keys,
  punctuationOrSpace,
};