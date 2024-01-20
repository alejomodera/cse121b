/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Jose Alejandro Modera Arce";
let currentYear = "2023";
let profilePicture = "images/about me photo.jpg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name")

const foodElement = document.getElementById("food")

const yearElement = document.querySelector("#year")

const imageElement = document.querySelector("img")

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute ("src", profilePicture)
imageElement.setAttribute ("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */

const favoritefoods = ["Hamburguer", "French fries", "milkshakes", "cakes", "Arroz con leche"]
document.getElementById("food").innerHTML = favoritefoods;

const favfood = "cookies";
favoritefoods.push (favfood);

foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.shift();
foodElement.innerHTML += `<br>${favoritefoods}`;

favoritefoods.pop();
foodElement.innerHTML += `<br>${favoritefoods}`;






