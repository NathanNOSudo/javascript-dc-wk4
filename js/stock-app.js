//fb

let stockSymbolTextBox = document.getElementById("stockSymbolTextBox")
let getQuoteButton = document.getElementById("getQuoteButton")
// stockQuoteHeading is H1 element
let stockQuoteHeading = document.getElementById("stockQuoteHeading")


//Arrow FUNCTIONS
getQuoteButton.addEventListener("click",function() => {
    console.log(this)
    let symbol = stockSymbolTextBox.value
    
})

//ARROW FUNCTIONS
setTimeout(() => {

} ,3000)

/* getQuoteButton.addEventListener("click",function(){
    let symbol = stockSymbolTextBox.value
    
    setInterval(function() {

        //Every 3 secondes we want to get the updated Quote
        let stockQuote = getStockQuote(symbol)
        stockQuoteHeading.innerHTML = `${stockQuote.name}- $${stockQuote.name}`
        console.log(stockQuote)
    
    
}, 3000 )

    // spe{name: "Apple", price: 227}


}) */