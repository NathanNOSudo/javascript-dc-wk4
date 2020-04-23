console.log("Introduction to JavaScript")

let a = 10 
let name = "John"

const pi = 3.142 // use const for values that don't change 

//pi = 3.5 // error because we are changing the const value 

// functions 
function sayHello() { 
    console.log("Hello!")
}

// call the function sayHello
sayHello()

displayName("John Doe")

function displayName(name) {
    console.log(name)
}

displayName("John Doe")

function add(firstNumber, secondNumber) {
    //print(firstNumber)
    console.log(firstNumber + secondNumber)
}

add(2,3)

function getName(name) {
    return name + " Doe"
} 

let fullName = getName("John")
console.log(fullName)

// ARRAYS 

let tasks = [] // creating an empty array 

// add items to the array 
tasks.push("Wash the car") // index = 0 
tasks.push("Feed dog") // index = 1 

console.log(tasks)

// DELETING ITEMS ARRAY USING POP 

// tasks.pop() will remove the element without returning the removed element 

//let deletedTask = tasks.pop() 
//console.log(deletedTask + " has been removed!")

// DELETING ITEM BASED ON INDEX 
//delete tasks[0]
//console.log(tasks) // [empty, "Feed dog"]

// DELETING ITEM USING SPLICE 
//tasks.splice(0,1)
//console.log(tasks)

// ITERATING AN ARRAY 

//for index in range(0,len(tasks),1): 
//    print(index)

//index = index + 1 
//index += 1 
//index++ 

for(let index = 1; index <= 10; index++) {
    console.log(index)
}

// reverse order 
for(let index = 10; index > 0; index--) {
    console.log(index)
}

// print items of the array 
for(let index = 0; index < tasks.length; index++) {
    console.log(tasks[index])
}

console.log(tasks[0]) // wash the car 
console.log(tasks[1]) // Feed dog
console.log(tasks[10]) // accessing index which does not exist 