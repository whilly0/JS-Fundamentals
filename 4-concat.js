
const [,, firstArg, secondArg] = process.argv;

console.log(`${firstArg || 'undefined'} is ${secondArg || 'undefined'}`);
