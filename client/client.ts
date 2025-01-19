/// <reference lib="dom" />

// Create DOM elements dynamically to replicate the HTML structure
const app = document.getElementById("app") || document.body;

// Function to create and append elements
function createElement(tag: string, classes: string[] = [], innerHTML: string = "") {
  const element = document.createElement(tag);
  classes.forEach(cls => element.classList.add(cls));
  element.innerHTML = innerHTML;
  return element;
}

// Build the structure dynamically
function buildPage() {
  // Page Container
  const page = createElement("div", ["page"]);

  // Header
  const header = createElement("header", ["header", "page__header"]);
  const nav = createElement("nav", ["nav"]);

  const navLogo = createElement("div", ["nav__logo"]);
  const navName = createElement("h1", ["nav__name"], "Type(N)o");
  const navKeyboard = createElement("img", ["nav__keyboard"]);
  navKeyboard.setAttribute("src", "assets/keyboard.svg");
  navKeyboard.setAttribute("alt", "Keyboard Icon");
  navLogo.append(navName, navKeyboard);

  const navLinks = createElement("div", ["nav__link-section"]);
  const leaderboard = createElement("p", ["nav__link", "nav__link_leaderboard"], "leaderboard");
  const about = createElement("p", ["nav__link", "nav__link_about"], "about");
  const settings = createElement("button", ["nav__link", "nav__settings"]);

  navLinks.append(leaderboard, about, settings);
  nav.append(navLogo, navLinks);
  header.append(nav);

  // Main Section
  const main = createElement("main", ["main", "page__main"]);

  // Tiles Section
  const tiles = createElement("section", ["tiles"]);
  const tileWpm = createElement("div", ["tile", "tile_wpm"]);
  tileWpm.innerHTML = `<h2 class="tile__heading">Words Per Minute</h2><span class="tile__value">42</span>`;

  const tileAccuracy = createElement("div", ["tile", "tile_accuracy"]);
  tileAccuracy.innerHTML = `<h2 class="tile__heading">Accuracy</h2><span class="tile__value">87%</span>`;

  const tileTime = createElement("div", ["tile", "tile_time-remaining"]);
  tileTime.innerHTML = `<h2 class="tile__heading">Time</h2><span class="tile__value">52s</span>`;

  tiles.append(tileWpm, tileAccuracy, tileTime);

  // Text Area Section
  const textArea = createElement("section", ["text-area"]);
  const textInput = createElement("input", ["text-area__input"]);
  textInput.setAttribute("type", "text");
  const textWrapper = createElement("div", ["text-area__wrapper"]);
  const textContent = createElement("div", ["text-area__text"]);
  textWrapper.append(textContent);
  textArea.append(textInput, textWrapper);

  // Keyboard Area Section
  const keyboardArea = createElement("section", ["keyboard-area"]);
  const keyboard = createElement("div", ["keyboard"]);

  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
    ["space"]
  ];

  rows.forEach(rowKeys => {
    const row = createElement("div", ["keyboard__row"]);
    rowKeys.forEach(key => {
      const keyElement = createElement("div", ["key"]);
      keyElement.id = key;
      keyElement.innerHTML = `<span class="key__text">${key}</span>`;
      row.append(keyElement);
    });
    keyboard.append(row);
  });

  keyboardArea.append(keyboard);

  // Footer
  const footer = createElement("footer", ["footer"]);
  const resetButton = createElement("button", ["reset", "footer__reset"]);
  footer.append(resetButton);

  // Append all to page
  main.append(tiles, textArea, keyboardArea);
  page.append(header, main, footer);

  // Add templates
  const wordTemplate = createElement("template", []);
  wordTemplate.id = "word-template";
  wordTemplate.innerHTML = `<div class="word"></div>`;

  const letterTemplate = createElement("template", []);
  letterTemplate.id = "letter-template";
  letterTemplate.innerHTML = `<span class="letter"></span>`;

  const cursorTemplate = createElement("template", []);
  cursorTemplate.id = "cursor-template";
  cursorTemplate.innerHTML = `<span class="letter__cursor"></span>`;

  app.append(page, wordTemplate, letterTemplate, cursorTemplate);
}

// Build the page
buildPage();
