
let News = document.getElementById("news")
let news2 = News[index]
let articlesLi = nes.articles.map(function(article){
let image = ""
if (article.urlToImage != null ){
    image = `<a href= ${article.url} >
    img class="imgs" src= ${article.urlToImage}
    </a>`
}   else (
    image = `<a href= ${article.url}> article </a>`
)
})

return `<li>
${news2.length}
${news2.title}
<p>${news2.content}</p>
</li>`
newsList.innerHTML = newsItems.join(" ")