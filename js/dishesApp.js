// dishList is a UL element in HTML
let dishList = document.getElementById("dishList")


// METHOD 1 
/*
for(let index = 0; index < dishes.length; index++) {
    let dish = dishes[index]
    let dishItem = `
                    <li>    
                       <img class="dish-image" src="${dish.imageURL}" />
                       <b>${dish.title}</b>
                       <p>${dish.description}</p>
                       <b>$${dish.price}</b>
                    </li>
                    `
    // dishList is UL 
    // insertAdjacentHTML is going to add the HTML to the end of UL  
    dishList.insertAdjacentHTML('beforeend',dishItem)
} */

// METHOD 2 (ARRAY HELPERS)
// map array helper is also known as transformation operator 

let dishItems = dishes.map(function(dish) {
    return `<li>
             ${dish.title}
             <p>${dish.description}</p>
            </li>`
})

dishList.innerHTML = dishItems.join(" ")
