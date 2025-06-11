function makeCounter(initialValue = 0) {
    let counter = initialValue;

    return () => {
        return counter++;
    }

    throw 'Not implemented';
}

const counter = makeCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());
