document.getElementById("pokeSearch").addEventListener("click", function(){
    this.classList.add("hide");
    setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/150`)
        .then(response => response.json())
        .then(data => {
            var pokeInfo = document.getElementById("pokeInfo");
            var name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            pokeInfo.innerHTML +=
            `
                <div id="pokemonInfo">
                    <p class="nombre-grande"> ${name} </p>
                    <img class="foto" src="${data.sprites.front_default}">
                    <img class="foto" src="${data.sprites.back_default}">
                    <p class="poke-data"><span class="poke-label">ID:</span> <span class="poke-value">${data.id}</span></p>
                    <p class="poke-data"><span class="poke-label">Nombre:</span> <span class="poke-value">${name}</span></p>
                    <p class="poke-data"><span class="poke-label">Experiencia:</span> <span class="poke-value">${data.base_experience}</span></p>
                    <p class="poke-data"><span class="poke-label">Altura:</span> <span class="poke-value">${data.height / 10}m</span></p>
                    <p class="poke-data"><span class="poke-label">Peso:</span> <span class="poke-value">${data.weight / 10}kg</span></p>
                    <p class="poke-data"><span class="poke-label">Habilidad:</span> <span class="poke-value">${data.abilities.map(ability => ability.ability.name)}</span></p>
                </div>
            `;
        })
        .catch(error => console.error("Error", error));
    }, 500);
});
