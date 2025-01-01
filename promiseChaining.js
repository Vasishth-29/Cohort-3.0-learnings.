//     3. Chaining Promises
// Question: Write a function that generates a random number between 1 and 10. Use promise chaining to:

// Multiply the number by 2.
// Add 5 to the result.
// Divide the final result by 3.
// // Log the result at each step.

function getNumber() {
    return new Promise((resolve) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        resolve(randomNumber);
    });
  }
  
  getNumber()
    .then((num) => {
        console.log("Original Number:", num);
        return num * 2;
    })
    .then((num) => {
        console.log("After Multiplying by 2:", num);
        return num + 5;
    })
    .then((num) => {
        console.log("After Adding 5:", num);
        return num / 3;
    })
    .then((num) => console.log("After Dividing by 3:", num))
    .catch((error) => console.log("Error:", error));