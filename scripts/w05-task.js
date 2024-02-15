/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templesElement = document.querySelector("#temples")

const templeList = [];

/* async displayTemples Function */ 

const displayTemples = (temples) => {
    temples.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        h3.textContent = element.templeName;
        let image = document.createElement("img");
        image.src = element.imageUrl;
        image.alt = element.location;
        article.appendChild(h3);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async() =>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    /*templeList = await response.json();*/
    const templeListData = await response.json();
    templeList.push(templeListData);
    displayTemples(templeList)
};

/* reset Function */

const reset = function() {
    const templesArticle = document.querySelector("#temples");
    templesArticle.innerHTML = "";
};

/* filterTemples Function */

function filterTemples(temples) {
    reset()
    let filter = document.getElementById("filtered").value;

    switch (filter) {
        case "utah":
            let utahTemple = temples.filter(temple => temple.location && temple.location.toLowerCase().includes("utah"));
            displayTemples(utahTemple);
            break;
        
        case "nonutah":
            let nonUtahTemple = temples.filter(temple => temple.location && !temple.location.toLowerCase().includes("utah"));
            displayTemples(nonUtahTemple);
            break;
        
        case "older":
            let olderTemple = temples.filter(temple => temple.dedicated && new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemple);
            break;

        case "all":
            let allTemple = temples;
            displayTemples (allTemple);
            break;
    }

};


/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList)
});

getTemples();