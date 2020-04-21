// Add functionality to the to do list so it will work.

// wrap everything in an EventListner so it waits for the todolist document to load before actually running the code.
// this should ensure my page is loading without anything slowing it down on my end


document.addEventListener('DOMContentLoaded', () => {
    // button to add new item
    let addButton = document.querySelector("#add");
    // input field to add new item
    let addInput = document.querySelector("#item");

    // add the svg icons for the buttons
    let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`;

    let completeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>`;
    //User needs to be able to add a new item by clicking on the add button or by pressing 'enter'  
    // add two event listeners, one on the button itself for a CLICK event and one that will 
    // listen to the KEYPRESS event so it will trigger on pressing 'enter'
    // user clicks on the add button
    // if there is text inside the item field then add it to the to do list
    addButton.addEventListener("click", function() {
        // grab the value of the input tag
        let newItem = document.getElementById("item").value;
        // if the input tag is not empty then run our function to add an item
        if (newItem) {
            // this function will add a new item to the todo list
            addItemTodo(newItem);
            // reset the input after we added a new item
            document.getElementById("item").value = "";
        }
    });

    // user pressd enter

    addInput.addEventListener("keypress", function( e ) {
        if  (13 === e.keycode) {
            // Grab the value of the input tag
            let newItem = document.getElementById( "item" ).value;
            // If the input tag is not empty then run our function to add an item
            if ( newItem ) {
                addItemTodo( newItem ) ;
                // reset the input after we added a new item
                document.getElementById( "item" ).value = " ";
            }  
        }
    });

    function addItemTodo(text)  {
        //grab the 'ul'
        let list = document.getElementById( "todo" );
        // create an 'li'
        let item = document.createElement( 'li' );
        //set the inside of `li` the same as the parameter that we passed in the function
        //which is going to be the value set by the user in the input field
        item.innerText = text;

         //create container for our buttons remove and complete
        let buttons = document.createElement('div');
        buttons.classList.add("buttons");
        
        // create the two buttons
        let remove = document.createElement( 'button' );
        remove.classList.add( 'remove' );
        // add the svg icon to button









    }