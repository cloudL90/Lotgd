const ul = document.querySelector("ul");
const br = document.createElement("br");

async function GetRaces() {
    const response = await fetch("http://localhost:3000/Races");
    const races = await response.json();
    for (const race of races) {   
        const li = document.createElement("li");
        li.innerHTML = race;
        ul.append(li);
    }
};

GetRaces();