const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("getJokeBtn");
const url = "https://api.chucknorris.io/jokes/random";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(allJokes => {
    
        jokeContainer.textContent = `${(allJokes.value)}`
    })
}

btn.addEventListener("click", () => getJoke())