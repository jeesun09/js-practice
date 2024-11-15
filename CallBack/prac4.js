function step1(callback) {
    console.log("Step 1: preparing...");
    setTimeout(() => {
        console.log("Step 1 complete!");
        callback();
    }, 1000);
}

function stpe2(callback) {
    console.log("Step 2: preparing...");
    setTimeout(() => {
        console.log("Step 2 complete!");
        callback();
    }, 4000)
}

function step3() {
    setTimeout(() => {
        console.log("Step 3: Finishing up!");
    }, 3000)
}

step1(() => {
    stpe2(() => {
        step3();
    })
})