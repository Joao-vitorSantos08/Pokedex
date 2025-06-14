let pokemonImagem = document.getElementById("pokemon_image")
let pokemonNumber = document.getElementById("pokemon_number")
let pokemonName = document.getElementById("pokemon_name")

let btnSearch = document.getElementById("btn-search")
let input = document.getElementById("input_search")

let btnPrev = document.getElementById("btn-prev")
let btn_next = document.getElementById("btn-next")

let searchPokemon = 1

function renderPokemon(pokemon){

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)

        pokemonName.innerText = data.name
        input.value = ""
        pokemonNumber.innerText = data.id
        pokemonImagem.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemonImagem.style.display = "block"
        searchPokemon = data.id

    })

    .catch((err) => {
        pokemonName.innerText = "Não encontrado :c"
        pokemonImagem.style.display = "none"
        pokemonNumber.innerText = ""

    })

}

btnSearch.addEventListener("click", function(event){

    event.preventDefault()
    renderPokemon(input.value)
})

btnPrev.addEventListener("click", function(){
    if(searchPokemon > 1)
        searchPokemon -=1
    renderPokemon(searchPokemon)
})

btn_next.addEventListener("click", function(){
        searchPokemon +=1
    renderPokemon(searchPokemon)
})

renderPokemon()