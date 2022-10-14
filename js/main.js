// Imports
import { getData } from "./modules/dataMiner.js";

(() => {

    console.log('main run...ok')

    // Variables
    let cardTemplate = document.querySelector("#cardTemplate").content,
        cardDisplay = document.querySelector('#mainCards');

    let buttonCalvin = document.querySelector("#candH");
    let buttonSci = document.querySelector("#sciFi");
    let buttonJack = document.querySelector("#jackBlack");

    // Functions

    function getJSONData (favThings) {
        console.log("getJSONData...ok");

        let favThingsObj = Object.keys(favThings);

        console.log(favThingsObj);

        debugger;
        favThingsObj.forEach(objectID => {
            debugger;
            // make a copy of the contents of the template tag
            let panel = cardTemplate.cloneNode(true),
            cardContainers = panel.firstElementChild.children; // the section tag's contents

            let cardID = cardContainers[0].setAttribute("id", objectID);

            // cardImage.src = `images/${favThings[objectID].pic}`;

            // cardImage.dataset.key = objectID;

            // cardImage.addEventListener('click',function(objectID) {
            //     createLightBoxContent(profs[prof.target.dataset.key]);
            // })

            cardContainers[1].textContent = favThings[objectID].name;
            cardContainers[2].textContent = favThings[objectID].role;

            debugger;
            // paste the prof 
            cardDisplay.appendChild(panel);
            
        })

    }

    function hoverCard() {
        gsap.to(".card", {x: 100})
    }

    function flipCard(favThing) {
    }



    getData(`./data.json`, getJSONData);

    // "Buttons"
    buttonCalvin.addEventListener("click", flipCard("candH"));
    buttonSci.addEventListener("click", flipCard("Sci"));
    buttonJack.addEventListener("click", flipCard("Jack"));

    buttonCalvin.addEventListener("hover", hoverCard());
})();