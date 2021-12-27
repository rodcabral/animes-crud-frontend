const animes = document.querySelector(".animes");

function renderAnime(_anime_id, _cover, _name, _sinopse) {
    const div = document.createElement("div");
    div.classList.add("anime-section");

    const cover = document.createElement("img");
    cover.classList.add("cover");
    cover.src = _cover;

    div.appendChild(cover);

    const name = document.createElement("p");
    name.classList.add("name");
    name.innerText =  _name;

    div.appendChild(name);

    const sinopse = document.createElement("p");
    sinopse.classList.add("sinopse");
    sinopse.innerText = _sinopse;

    div.appendChild(sinopse);

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn-default");
    btnEdit.classList.add("btn-edit");
    btnEdit.innerText = "Edit"
    
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-default");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerText = "Delete";

    btnDelete.addEventListener("click", async () => {
        await fetch(`http://localhost:3333/delete/${_anime_id}`);

        window.location.reload();
    })

    buttons.appendChild(btnEdit);
    buttons.appendChild(btnDelete);

    div.appendChild(buttons);

    animes.appendChild(div);
}

async function getAnimes() {
    const data = await fetch("http://localhost:3333/animes");
    const animes = await data.json();

    animes.map((anime) => {
        renderAnime(anime.anime_id, anime.cover, anime.name, anime.sinopse);
    })
}

getAnimes();