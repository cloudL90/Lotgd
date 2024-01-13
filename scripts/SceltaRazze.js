const ul = document.querySelector("ul");
const br = document.createElement("br");

async function GetRaces() {
    const response = await fetch("http://localhost:5126/api/Races");
    const races = await response.json();
    for (const race of races) {   
        const li = document.createElement("li");
        li.innerHTML = race.Name;
        ul.append(li);
    }
};

GetRaces();