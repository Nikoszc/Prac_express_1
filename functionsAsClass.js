function Product(n,p){
    this.name = n;
    this.price = p;
    //assumes  -> return.this
    //return {name: "YourName", price: 100000};

    this.display = function () {
        console.log (this.name, this.price);
    }

    return 10;
}

const p1 = new Product("android",40000);
console.log(p1); 
//output : Product {name: 'android', price: 40000}
// new by default returns the value of a function in this case and also in the case of objects.

 
const p2 = Product("nothing",12787);
console.log(p2);
// output: undefined
// Since, 'new' is not used in this case and also no return is defined in the function we dont get a value in return.       