
class Product{
    constructor(id,name,image,price){
        this.id = id,
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

