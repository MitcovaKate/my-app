class Money{
    constructor(amount,currency){
        this.amount=amount
        this.currency=currency
    }
    get amount(){
        return this._amount
    }
    set amount(value){
   if(value <= 0){
    throw new Error("ERROR: INVALID amount!");
    }
else{this._amount=value}
    }
 
    get currency() {
        return this._currency;
      }
    
      set currency(value) {
        const OkCurrency = ["EUR", "USD", "MDL"];
        if (!OkCurrency.includes(value)) {
          throw new Error("ERROR: INVALID currency! Only EUR, USD , MDL!");
        }
        this._currency = value;
      }
    }


export {Money}
