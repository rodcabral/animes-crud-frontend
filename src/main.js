const form = document.querySelector(".anime-form");
const name = document.querySelector(".name");
const sinopse = document.querySelector(".sinopse");
const cover = document.querySelector(".cover");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await fetch("http://localhost:3333/new", {
            method: "POST",
            body: JSON.stringify({
                name: name.value,
                sinopse: sinopse.value,
                cover: cover.value
            })
        });
    } catch(err) {
        console.log(err);
        alert("Error");
    }
});