const form = document.querySelector("form");
const button = document.querySelector("button");


button.addEventListener("click", () => {
    if(form.password.value == form.samePassword.value) {
        fetch("http://localhost:3000/pg", {
        method: "POST",
        body: JSON.stringify({
            title: "Contadino",
            name: form.name.value,
            password: form.pippo.value,
            samePassword: form.samePassword.value,
            email: form.email.value,
            gender: form.gender.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    } else {
        alert("Le password devono coincidere")
    }

    form.reset();
});
