const span = document.querySelectorAll("span");

span[1].addEventListener("click",  () => {
    window.location.href = "./CreaPersonaggio.html";
});

document.addEventListener("keydown", (event) => {
    if(event.key.toLowerCase() == "c") {
        window.location.href = "./CreaPersonaggio.html";
    }
});