const apikey='c4d277bfe41b4f6797e10d76f87bf7ff'

const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById('search-input')
const searchButton = document.getElementById('search-btn')

async function fetchrandom(){
    try{
const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`
const response = await fetch(apiURL)
const data = await response.json()
return data.articles;

    }catch(error){
   console.error("Error fetching random news", error);
    }
    return[]
}

searchButton.addEventListener("click", ()=>{
    const query = searchField.ariaValueMax.trim()
    if(query !==""){
        try{

        }catch(error){
            console.log("error fecting news by query")
        }
    }
})

function displayBlogs(articles){
    blogContainer.innerHTML = ""
    articles.forEach((article)=>{
const blogCard = document.createElement("div")
blogCard.classList.add("blog-card")
const img = document.createElement("img")
img.src = article.urlToImage
img.alt= article.title
const title = document.createElement("h2")
const trunckatedTitle=article.title.length > 30? article.title.slice(0,30)+"....." : article.title;
title.textContent = trunckatedTitle;
const description = document.createElement("p")
description.textContent = article.description

blogCard.appendChild(img)
blogCard.appendChild(title)
blogCard.appendChild(description)
blogCard.addEventListener('click',()=>{
    window.open(article.url, "_blank")
})
blogContainer.appendChild(blogCard)

    })
}

(async()=>{
    try{
const articles= await fetchrandom();
displayBlogs(articles);
    }catch(error){
        console.error("Error fetching random news", error);

    }
})();