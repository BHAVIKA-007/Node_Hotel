function product(name,price,instock){
   this.name=name;
    this.price=price;
    this.inStock=instock;
}
const product1= new product("Earphone",100,true);
const product2=new product("Laptop",50000,false);
console.log(product1);
console.log(product2);