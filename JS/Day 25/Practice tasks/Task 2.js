function createCounter() {
    let count = 0;
    return function () {
        count++;
        console.log("Count:", count);
    };
}
const myCounter = createCounter();
myCounter();
myCounter();  