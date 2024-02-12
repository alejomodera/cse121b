/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Alejandro Modera",
    photo: "images/about me photo.jpg",
    favoriteFoods: ["Hamburguer", "French fries", "milkshakes", "cakes", "Arroz con leche"],
    hobbies: ["play guitar", "play videogames", "listen to music", "watch movies and series", ],
    placesLived: [""]
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Bogota, Colombia", length: "15 years"});
myProfile.placesLived.push({place: "Cali, Colombia", length: "8 months"});
myProfile.placesLived.push({place: "pasto, Colombia", length: "8 months"});
myProfile.placesLived.push({place: "Popayan, Colombia", length: "4 months"});

/* DOM Manipulation - Output */
/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach (food => {
    let Li = document.createElement("li");
    /*document.li.push(myProfile.favoriteFoods)*/
    Li.textContent = food;
    /*document.querySelector("#favorite-foods").push(Li);*/
    document.querySelector("#favorite-foods").appendChild(Li);
})

/* Hobbies List */

myProfile.hobbies.forEach (hobby => {
    let Li = document.createElement ("li");
    Li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(Li);
})

/* Places Lived DataList */

myProfile.placesLived.forEach (object =>{

    let Dt = document.createElement("dt");
    Dt.textContent = object.place;
    let Dd = document.createElement("dd");
    Dd.textContent = object.length;

    document.querySelector("#places-lived").appendChild(Dt);
    document.querySelector ("#places-lived").appendChild(Dd);
})