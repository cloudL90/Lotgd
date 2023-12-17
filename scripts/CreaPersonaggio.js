const form = document.querySelector("form");
const button = document.querySelector("button");
const pwd = document.querySelectorAll("input");

function showPassword(value) {
    if(value == 1) {
        let pwdType = pwd[1].getAttribute("type");
        if(pwdType == "password") {
            pwd[1].setAttribute("type", "text");
        } else if(pwdType == "text"){
            pwd[1].setAttribute("type", "password");
        } 
    } else {
        let pwdType2 = pwd[2].getAttribute("type");
        if(pwdType2 == "password") {
            pwd[2].setAttribute("type", "text");
        } else if(pwdType2 == "text") {
            pwd[2].setAttribute("type", "password");
        }
    }
}

button.addEventListener("click", () => {
    if(form.password.value == form.samePassword.value) {
        fetch("http://localhost:3000/pg", {
        method: "POST",
        body: JSON.stringify({
            title: "Contadino",
            name: form.name.value,
            password: form.password.value,
            samePassword: form.samePassword.value,
            email: form.email.value,
            gender: form.gender.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    }else {
        button.disabled = true;
        alert("Le password devono coincidere");
    }

    pwd[1].setAttribute("type", "password");
    pwd[2].setAttribute("type", "password");
    form.reset();
});

function checkForm(){
    if(form.name.value !== "" && form.email.value !== ""
    && form.password.value !== "" && form.samePassword.value !== ""
    ){
        console.log(form);
        button.disabled = false
    }
    else {
        console.log("quello che ti pare");
    }
}

