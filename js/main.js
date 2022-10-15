// Imports
import { getData } from "./modules/dataMiner.js";

(() => {

    console.log('main run...ok')

    // Variables
    let cardTemplate = document.querySelector("#cardTemplate").content,
        cardDisplay = document.querySelector('#mainCards');

    // Functions

    function getJSONData (favThings) {
        console.log("getJSONData...ok");

        let favThingsObj = Object.keys(favThings);

        favThingsObj.forEach(objectID => {
            // make a copy of the contents of the template tag
            let panel = cardTemplate.cloneNode(true),
            cardContainers = panel.firstElementChild.children;
            // fuckin finally this works
            panel.firstElementChild.id = objectID;
            
            panel.firstElementChild.addEventListener('click',function(prof) {
                flipCard(objectID);
            })
            panel.firstElementChild.addEventListener('mouseover',function() {
                hoverCard();
            })
            console.log(favThings[objectID])

            // cardImage.addEventListener('click',function(objectID) {
            //     createLightBoxContent(profs[prof.target.dataset.key]);
            // })

            cardContainers[1].textContent = favThings[objectID].name;
            cardContainers[2].textContent = favThings[objectID].why;
            cardContainers[3].textContent = favThings[objectID].desc;

            // debugger;
            // paste the prof 
            cardDisplay.appendChild(panel);

            let grop = document.querySelector(`div.cardTemplate > *:nth-child(1)`);
            console.log("this is the nth child", grop);

            document.querySelector(`#${objectID}`).style.backgroundImage = `url(../../images/${objectID}.jpg)`;

            let htmlIDTag = document.querySelector(`#${objectID}`); // the section tag's contents
            console.log("this is the htmlIDtag", htmlIDTag)
        })

    //Buttons
    let buttonCard = document.querySelector(".card");
    }

    function hoverCard() {
        console.log("card hovered upon");

    }

    function flipCard(favThing) {
        console.log("card flipped");
        console.log(favThing);

        let cardData = document.querySelector(`#${favThing}`),
        bingus = cardData.children,
        scrongle = bingus[2,3].classList;
        console.log(cardData);
        console.log(bingus, scrongle);
        // On click, we make the background white, and then make a toggle for the hidden classes.
        
    }

    getData(`./data.json`, getJSONData);
})();