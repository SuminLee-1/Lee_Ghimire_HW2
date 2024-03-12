import { Destination } from './modules/Destination.js';

const destinations = {
  "Tokyo": new Destination("Tokyo", "The bustling capital of Japan", [
    "../images/tokyo1.jpg",
    "../images/tokyo2.jpg",
    "../images/tokyo3.jpg"
  ]),
  "Paris": new Destination("Paris", "The City of Light", [
    "../images/paris1.jpg",
    "../images/paris2.jpg",
    "../images/paris3.jpg"
  ]),
  "New York": new Destination("New York", "The city that never sleeps", [
    "../images/newyork1.jpg",
    "../images/newyork2.jpg",
    "../images/newyork3.jpg"
  ])
};

const buttonsContainer = document.getElementById('buttons');
const destinationDisplay = document.getElementById('destinationDisplay');

Object.keys(destinations).forEach(city => {
  const button = document.createElement('button');
  button.textContent = city;
  button.addEventListener('click', () => {
    destinations[city].render(destinationDisplay);
  });
  buttonsContainer.appendChild(button);
});

// Optionally, display the first destination by default
destinations[Object.keys(destinations)[0]].render(destinationDisplay);
