class Product {
    constructor(n, p) {
        // constructor function to create new real life instances called as object.
        // When we create an object the constructor function that gets called.

        // To define data members we need to initialize them inside of the const. function.
        // To initialize them we use the this. keyword.
        // Data members:
        this.name = n;
        this.price = p;
        this.discount = d;     


    //member functions
    
}

    displayProduct(){
        console.log(this.name,this.price,this.discount)
    }

    buyProduct(){
        
    }
}
let iphone = new Product("Iphone",500000);
let Laptop = new Product("Laptop",60000);

console.log(iphone);
console.log(Laptop);