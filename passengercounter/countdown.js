//create a countdown
function readyGo() {
  console.log(42);

}
//Call the function
readyGo();


let lap1 = 30
let lap2 = 35
let lap3 = 40
let lap4 = 45
//Create a function that logs out the sum of all the lap times
function exitPoint(x1, x2, x3, x4) {
  let totalTime = x1 + x2 + x3 + x4;
  console.log(totalTime);
}

//call the function
exitPoint(
  lap1,
  lap2,
  lap3,
  lap4


);




let lapsCompleted = 0
//Create a function that increments the lapsCompleted variable with one
//Run it three times

function increasedLaps(){
  lapsCompleted = lapsCompleted +1;
   }

  // OR  ++lapsCompleted;

//Run it 3 times
increasedLaps();
increasedLaps();
increasedLaps();
console.log(lapsCompleted);
