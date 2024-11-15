function greet(name, callback) {
    console.log("hello, " + name + " !");
    callback();
}

function sayGoodbuy() {
    console.log("Good buy");
}

greet("Jeesun", sayGoodbuy);