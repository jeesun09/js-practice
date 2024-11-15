function fetchData(callback) {
    console.log("Fetching Data....");
    setTimeout(() => {
        callback();
        console.log("Data received!");
    }, 2000);
}

function processData() {
    console.log("Processing data....");
}

fetchData(processData);