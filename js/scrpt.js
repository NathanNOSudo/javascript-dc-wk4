
let nameHeading = document.getElementById("nameHeading")

let firstName = "Nathan"
let lastName = "Doe"
let  age = 32

// Nathan, Doe

//nameHeading.innerHTML = "Greetings" + firstName + " , " + lastName

let taskTextBox = document.getElementById("taskTextBox")
let addTaskButton = document.getElementById("addTaskButton")
let taskList = document.getElementById("taskList")

// METHOD 2
function removeTask2(e) {
    // e.srcElement is a button element
    console.log(e.srcElement)
}

// METHOD 1
function removeTask(btn) {
    // btn.parentElement is LI
    //console.log(btn.parentElement)

    taskList.removeChild(btn.parentElement)
    //console.log('removeChild(btn.parentElement))
}
 
addTaskButton.addEventListener("click", function () {
    //creAte li element and ad to the ul
    let taskName = taskTextBox.value

    let taskItem = `<li>
                                    <input type ='checkbox' />
                                    <label>${taskName}</label>
                                    <button onClick= ' removeTask(this) ' >Remove</button>
                                    <button onClick= ' removeTask2(event) ' >Remove Using Event</button>
                            </li>`
   taskList.innerHtml = taskList.innerHtml + taskItem
    
   // += takes the original string or innerHTML and  replaces old innerHTML
    //taskList.HTML += taskItem

    //Adding the new html to the end of the ul list.
    // beforeend is used to add the new HTML to the end of the ul
    taskList.insertAdjacentHTML('beforeend' , taskItem)
})

