// Declare a global counter variable
let count = 0;

// Create a simple function that increments the variable, and then calls itself recursively
function recursive() {
    if (5 <= count) return;
    console.log(count++)
    recursive()
}


try {
    // Call function
    recursive()
} catch (error) {
    console.log(`caught at error ` + error)
}
