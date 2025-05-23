// Retrieve the first command-line argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer
const num = parseInt(arg, 10);

// Check if the conversion was successful
if (Number.isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}
