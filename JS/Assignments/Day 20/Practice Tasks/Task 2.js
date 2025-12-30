// Add a method describe() that prints the book details.



const book = {
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Pirsig Robert",
    pages: 432,

    describe() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages`);
    }
};
book.describe();  