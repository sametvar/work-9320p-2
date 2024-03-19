const characters = [
        {
            "id": 1,
            "name": "Luke Skywalker",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
            "homeworld": "tatooine"
        },
        {
            "id": 2,
            "name": "C-3PO",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
            "homeworld": "tatooine"
        },
        {
            "id": 3,
            "name": "R2-D2",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
            "homeworld": "naboo"
        },
        {
            "id": 4,
            "name": "Darth Vader",
            "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
            "homeworld": "tatooine"
        },
        {
            "id": 5,
            "name": "Leia Organa",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
            "homeworld": "alderaan"
        },
        {
            "id": 6,
            "name": "Owen Lars",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
            "homeworld": "tatooine"
        },
        {
            "id": 7,
            "name": "Beru Whitesun lars",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
            "homeworld": "tatooine"
        },
        {
            "id": 8,
            "name": "R5-D4",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
            "homeworld": "tatooine"
        },
        {
            "id": 9,
            "name": "Biggs Darklighter",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
            "homeworld": "tatooine"
        },
        {
            "id": 10,
            "name": "Obi-Wan Kenobi",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
            "homeworld": "stewjon"
        },
        {
            "id": 11,
            "name": "Anakin Skywalker",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
            "homeworld": "tatooine"
        },
        {
            "id": 12,
            "name": "Wilhuff Tarkin",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
            "homeworld": "eriadu"
        },
        {
            "id": 13,
            "name": "Chewbacca",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
            "homeworld": "kashyyyk"
        },
        {
            "id": 14,
            "name": "Han Solo",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
            "homeworld": "corellia"
        },
        {
            "id": 15,
            "name": "Greedo",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
            "homeworld": "rodia"
        },
        {
            "id": 16,
            "name": "Jabba Desilijic Tiure",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
            "homeworld": "tatooine"
        },
        {
            "id": 17,
            "name": "Wedge Antilles",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
            "homeworld": "corellia"
        },
        {
            "id": 18,
            "name": "Jek Tono Porkins",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
            "homeworld": "bestine"
        },
        {
            "id": 19,
            "name": "Yoda",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
            "homeworld": "other"
        },
        {
            "id": 20,
            "name": "Palpatine",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
            "homeworld": "naboo"
        }
    ]



const showCharactersButton = document.getElementById("showCharacters")

showCharactersButton.style.backgroundColor = "red"

let renderStatus = true

function renderCharacters() {
    const showInfo = document.getElementById("showInfo")
    if (renderStatus) {
        showInfo.innerHTML = characters.map(function (character) {

            return(
                `  <div class="den">             
            <div class="card">
           <img src ="${character.pic}">
           <h2>${character.name}</h2>
           <p>homewold:${character.homeworld || "unknown"}</p>
       </div>
       </div>
`)

     
        }).join("")
        showCharactersButton.textContent = "Karakterleri Gizle"
        showCharactersButton.style.backgroundColor = "pink"

    } else {
        showInfo.innerHTML = "";
        showCharactersButton.textContent = "Karakterleri Göster"
        showCharactersButton.style.backgroundColor = "red"
    }
    renderStatus = !renderStatus
}



const homeworldRaw = characters.map((item) => item.homeworld);
    
console.log(homeworldRaw); 

 let homeworlds = characters.map((item => item.homeworld ?? 'other'))
console.log(homeworlds);  
 


let homeworldsUnique = homeworlds.filter((arr, 
 index) => homeworlds.indexOf(arr) === index); 
console.log(homeworldsUnique); 




let homeworldsLowercase = homeworldsUnique.map(element => {
return element.toLowerCase();
});



homeworlds = homeworldsLowercase;
console.log(homeworlds) 








const input = document.querySelector(".input");

for (let i = 0; i < homeworldsLowercase.length; i++) {
 input.innerHTML += `
<div>
 <input
   class="formC"
   type="radio"
   name="homeworld"
   value="${homeworlds[i]}"
   id="homeworld-${homeworlds[i]}"
 />
 <label class="formCheckLabel text-white" for="homeworld-${homeworlds[i]}">
 ${homeworlds[i]}
 </label>
</div>
</div>`;
}

const inputFirst = document.querySelectorAll(".formC");

inputFirst.forEach(function (inputSecond) {
inputSecond.addEventListener("click", function () {
 selectedInput = this.value;

 const filteredHomeworld = characters.filter(
   (item) => item.homeworld === selectedInput
 );






 const row = document.querySelector(".row");

 if (row == "") {
   for (const selected of filteredHomeworld) {
     row.innerHTML += `<div >
     <img class="box" src="${selected.pic}">
     
     <h4>${selected.name}</h4>
     <h5>${selected.homeworld}</h5>
   </div>`;
   }
 } else {
   row.innerHTML = "";
   for (const selected of filteredHomeworld) {
     row.innerHTML += `<div class="box">
     <img  src="${selected.pic}">
     
     <h4>${selected.name}</h4>
     <h5>${selected.homeworld}</h5>
   </div>`;
   }
 }
});
});






    



 







































