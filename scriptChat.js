let cats = [
    {
        name: "Kawaï",
        mood: "Mignon",
        energy: 100,
        img: "cat1.jpg",
        messages: {
            feed: "Kawaï saute sur ses croquettes avec joie!",
            pet: "Kawaï ronronne mais il va peut-être bientôt te mordre... avec tendresse...",
            play: "Kawaï court partout dans la maison et griffe le canapé",
            sleep: "Kawaï fait un gros dodo et rêve de maëlys et Loreleï"
        }
    }
];

let chat = 0;
let cat = cats[chat];

function updateCatStatus(){
    document.getElementById("cat-name").textContent = cat.name;
    document.getElementById("cat-mood").textContent = "Mood: " + cat.mood;
    document.getElementById("cat-Energy").textContent = "Energie: " + cat.energy + "%";
    document.getElementById("cat-img").src = cat.img;
}

function feedCat(){
    if(cat.energy < 100){
        cat.energy = Math.max(cat.energy + 20, 100);
        cat.mood = "A bien mangé";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.feed;
       
    } else {
        document.getElementById("message").textContent = cat.name + " a trop mangé!";
    }
}
 function petCat(){
    cat.mood = "Ronrons";
    updateCatStatus();
    document.getElementById("message").textContent = cat.messages.pet;
 }

function playWithCat(){
    if(cat.energy > 20){
        cat.energy -= 20;
        cat.mood = "Joueur";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.play;
        
    } else {
        document.getElementById("message").textContent = cat.name + " a la flemme de jouer.";
    }
}
function sleepCat(){
        cat.energy = 100;
        cat.mood = "Flemmard";
        updateCatStatus();
        document.getElementById("message").textContent = cat.messages.sleep;
        
    }

function changeCat() {
        chat = (chat + 1) % cats.length;
        cat = cats[chat];
    
        updateCatStatus();

        document.getElementById("message").textContent = "C'est l'heure d'embêter " + cat.name + " !";
        cat.img = `cat${chat + 1}.jpg`;
    }
