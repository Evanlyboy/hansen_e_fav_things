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
            // admittedly, this is stupid but it works
            let panel = cardTemplate.cloneNode(true),
            cardContainer = panel.firstElementChild,
            cardStuff = cardContainer.firstElementChild.children;
            // fuckin finally this works
            panel.firstElementChild.id = objectID;
            
            panel.firstElementChild.addEventListener('click',function(prof) {
                flipCard(objectID);
            })
            panel.firstElementChild.addEventListener('mouseover',function() {
                hoverCard();
            })
            console.log(favThings[objectID])
            console.log(cardStuff)

            cardStuff[1].textContent = favThings[objectID].name;
            cardStuff[2].textContent = favThings[objectID].why;
            cardStuff[3].textContent = favThings[objectID].desc;

            // add the completed element to the page
            cardDisplay.appendChild(panel);

            // change the background
            document.querySelector(`#${objectID}`).style.backgroundImage = `url(../../images/${objectID}.jpg)`;

            let htmlIDTag = document.querySelector(`#${objectID}`); // the section tag's contents
            console.log("this is the htmlIDtag", htmlIDTag)
        })

    //Buttons
    let buttonCard = document.querySelector(".card");
    }

    function hoverCard() {
        // console.log("card hovered upon");
    }

    function flipCard(favThing) {

        // Simple gsap animation
        gsap.to(`#${favThing}`, {y:50, duration: 0.1,})
        gsap.to(`#${favThing}`, {y:0, duration: 0.1, delay:0.1,})

        // We are seeing if there are any classes with cardHide inside our card
        let cardIdentifier = document.querySelector(`#${favThing}`);
        let classAdder = cardIdentifier.querySelectorAll(".cardHide");
        let classRemover = cardIdentifier.querySelectorAll(".cardInfo");

        // if there is, we must add the info we have to the card
        if(classAdder.length > 1) {
            console.log("card flipped to true");
            // console.log("this is the favthing", favThing);

            // Data Editing

            classAdder.forEach(classAdder => {
                classAdder.classList.add('cardInfo');
                classAdder.classList.remove('cardHide');
            })

            cardIdentifier.querySelector('.card').style.backgroundColor = "black";
            cardIdentifier.querySelector('.card').style.opacity = "0.80";


            console.log(classAdder);
        } else {
            console.log("card flipped to false");

            // It's skipping over this because there isn't anything in the ClassAdder
            classRemover.forEach(classRemover => {
                classRemover.classList.add('cardHide');
                classRemover.classList.remove('cardInfo');
            })

            cardIdentifier.querySelector('.card').style.backgroundColor = "transparent";
            cardIdentifier.querySelector('.card').style.opacity = "1";

        }
        

        // bingus = cardData.children,
        // scrongle = bingus[2,3].classList;
        // console.log(cardData);
        // console.log(bingus, scrongle);
        // On click, we make the background white, and then make a toggle for the hidden classes.
        
    }

    getData(`./data.json`, getJSONData);
})();