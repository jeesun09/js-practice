// Reverse a String
// Write a function reverse(str) that returns the input string in reverse order.
// Example: "hello" → "olleh"

function reverse(str) {
    let left = 0;
    let right = str.length - 1;
    let arr = str.split('')

    while (left < right) {
        let swap = arr[left];
        arr[left] = arr[right];
        arr[right] = swap;
        left++;
        right--;
    }

    return arr.join('');
}

const text = 'Hello';
const result = reverse(text);
console.log("Reverse of the string is: ", result);
