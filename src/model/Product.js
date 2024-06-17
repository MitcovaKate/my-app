
class Product{
    constructor(name,image,price){
        this.name=name
        this.image=image
        this.price=price
    }
    get name(){
        return this._name
    }
    set name(value){
if(value === ""){
    throw new Error("ERROR: INVALID Product!");
}
else{this._name=value}
    }
}

export {Product}

