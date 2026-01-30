const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Promise resolved successfully!"), 500);
});
myPromise.then(result => console.log(result));  
