/* eslint-disable */
import "./style.css";

document
  .getElementById("shuffleBtn")
  .addEventListener("click", generateRandomCard);

function generateRandomCard() {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = `
        <div class="card">
            <div class="top-left">${randomSuit}</div>
            <div class="center">${randomValue}</div>
            <div class="bottom-right">${randomSuit}</div>
        </div>
    `;

  const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
  const cardElements = cardContainer.querySelectorAll(
    ".card .top-left, .card .center, .card .bottom-right"
  );
  cardElements.forEach(element => {
    element.style.color = color;
  });
}
