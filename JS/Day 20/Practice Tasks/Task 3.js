// Use object Destructuring to extract the title and author.


const book = {
    title: "Zen and the Art of Motorcycle Maintenance",
    author: "Pirsig Robert",
    pages: 432
}

const {title,author} = book
console.log("Title: ",title);
console.log("Author: ",author);
