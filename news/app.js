let newsItems = news.map(function(news) {
    return `<li>
    ${news.length}
    ${news.title}
    <p>${news.content}</p>
    </li>`
})

