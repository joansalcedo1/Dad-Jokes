const jokeBtn = document.getElementById("jokeBtn")
const joke = document.getElementById("joke")

jokeBtn.addEventListener("click",async ()=>{
    try {
        const res = await fetch("https://icanhazdadjoke.com/",{
        headers:{
            "Accept":"application/json"
        }
    })
    const data = await res.json()
    console.log(data)
    joke.innerHTML = data.joke
    } catch (error) {
        alert("Tuvimos un problema con la conexión con la API")
    }  
})