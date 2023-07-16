//document.getElementById("count").innerText = 10

// let count = 10;
// count = count + 10 ;
// console.log(count);
//
// initialize the count as 0
// listen for clicks on the button increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count



function clickedSignal() {
  console.log("The Button was clicked!");
}

let count = 0

function increment() {
  count = count + 1;
  console.log(count);

  document.getElementById("count-el").innerText = count;
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
  console.log(count);
}



// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById('save-el');


    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    function save(){
       let previousEntries = count + " - "




    // 3. Render the variable in the saveEl using innerText
    //saveEl.textContent = previousEntries + saveEl.innerText
    saveEl.textContent+=previousEntries


    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = count
    count=0
}
