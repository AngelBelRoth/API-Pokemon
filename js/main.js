async function fetchData() {

    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const res = await fetch(`https://api.pokemontcg.io/v2/cards?api_key=457bee5f-fadf-4324-b866-f38b375be84d`);
        // const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:pikachu`,{headers:{'X-Api-Key':'457bee5f-fadf-4324-b866-f38b375be84d'}});
        // const res = await fetch(`https://api.pokemontcg.io/v2/cards`,{headers:{'X-Api-Key':'457bee5f-fadf-4324-b866-f38b375be84d'}});

        if (!res.ok) {
            throw new Error("Could not fetch resource");
        }

        const cardData = await res.json();
        cardData.data.forEach(element => {
            let elementName = element.name
            if (elementName.toUpperCase() === pokemonName.toUpperCase()) {
                let pokemonCards = element.images.small;
                const imgCard = document.getElementById("pokemonCard");
                imgCard.src = pokemonCards;
                imgCard.style.display = "block";

            }
        });

    }
    catch (error) {
        console.error(error);
    }
}

// Citation: Bro Code
// href: https://www.youtube.com/watch?v=37vxWr0WgQk
// Adding second api: Marquis