let quote_container = document.querySelector(".quote_span")
let author_container = document.querySelector(".author_span")
let btn = document.querySelector(".btn")

const api_url = "http://api.quotable.io/random";


btn.addEventListener("click",()=>{
    getData()
})

async function getData(){
    try {
        const responce =await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        const data = await responce.json()
        quote_container.innerHTML = data[0].quote
        author_container.innerHTML = data[0].author

    } catch (error) {
        console.log("error 404!");
    }
}
getData()