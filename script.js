// Calculate Area of Circle
let radius = parseFloat(prompt("Enter the radius of the circle:"));

if (radius > 0) {
  let area = Math.PI * radius * radius;
  let result = area.toFixed(2); // round off to 2 decimal places
  console.log(`The area of the circle with radius ${radius} is ${result}`);
} else {
  console.log("Please enter a positive number for radius.");
}
