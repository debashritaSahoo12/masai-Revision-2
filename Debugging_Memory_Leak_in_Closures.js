function createHeavyDataHandler() {

let largeData = new Array(1000000).fill(0); // Large data array

return {

processData: function () {

console.log("Processing data of size:", largeData.length);},

clearData: function () {

console.log("Clearing data");

delete this.largeData; // Attempt to free memory 
 } }; }

const handler = createHeavyDataHandler();

handler.processData(); // Output: Processing data of size: 1000000
handler.clearData();    // Output: Clearing data

// Despite clearing the data, memory usage 

//Explanation
//The issue here is that the clearData function only sets the largeData variable to null, but it doesn't actually release the memory because the closure still holds a reference to the largeData array.
