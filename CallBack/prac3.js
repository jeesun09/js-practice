function test(name, callback) {
    const result = callback();
    console.log("Hola " + name + " " + result);
}

test("Raja", () => {
    console.log("Good bye world!");
    return "Good bye World!"
})