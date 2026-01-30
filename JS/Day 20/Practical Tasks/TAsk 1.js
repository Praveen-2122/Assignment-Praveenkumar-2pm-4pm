// Class Product with discountedPrice method

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    discountedPrice(discountPercent){
        return this.price - (this.price * discountPercent / 100);
    }
}
const product1 = new Product("PS5",55000);
console.log(product1.name, "discounted price : ", product1.discountedPrice(10));
