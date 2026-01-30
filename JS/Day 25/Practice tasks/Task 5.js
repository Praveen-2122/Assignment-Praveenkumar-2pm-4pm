
async function handlePromise() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => resolve("Async result ready!"), 500);
        });
        console.log("Async/await result:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}
handlePromise();
