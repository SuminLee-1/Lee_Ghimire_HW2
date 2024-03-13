import { Destination } from './modules/Destination.js';

const destinations = {
  "Tokyo": new Destination("Tokyo", "Click to view full image", [
    "../images/tokyo1.jpg",
    "../images/tokyo2.jpg",
    "../images/tokyo3.jpg",
    "../images/tokyo4.jpg",
    "../images/tokyo5.jpg",
    "../images/tokyo6.jpg",
    "../images/tokyo7.jpg",
    "../images/tokyo8.jpg",
    "../images/tokyo9.jpg",
    "../images/tokyo10.jpg",
    "../images/tokyo11.jpg",
    "../images/tokyo12.jpg"
  ]),
  "Paris": new Destination("Paris", "Click to view full image", [
    "../images/paris1.jpg",
    "../images/paris2.jpg",
    "../images/paris3.jpg",
    "../images/paris4.jpg",
    "../images/paris5.jpg",
    "../images/paris6.jpg",
    "../images/paris7.jpg",
    "../images/paris8.jpg",
    "../images/paris9.jpg",
    "../images/paris10.jpg",
    "../images/paris11.jpg",
    "../images/paris12.jpg"
  ]),
  "New York": new Destination("New York", "Click to view full image", [
    "../images/newyork1.jpg",
    "../images/newyork2.jpg",
    "../images/newyork3.jpg",
    "../images/newyork4.jpg",
    "../images/newyork5.jpg",
    "../images/newyork6.jpg",
    "../images/newyork7.jpg",
    "../images/newyork8.jpg",
    "../images/newyork9.jpg",
    "../images/newyork10.jpg",
    "../images/newyork11.jpg",
    "../images/newyork12.jpg",
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
