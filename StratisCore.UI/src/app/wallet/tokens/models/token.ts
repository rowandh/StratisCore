export class Token {
  constructor(ticker: string, address: string, name: string, decimals: number = 0) {
    this.ticker = ticker;
    this.address = address;
    this.name = name || this.ticker;
    this.decimals = decimals;
  }

  ticker: string;
  address: string;
  name: string;
  decimals: number;
}

export class SavedToken extends Token {
  constructor(ticker: string, address: string, balance: number, name: string, decimals: number = 0) {
    super(ticker, address, name, decimals);
    this.balance = balance;
  }

  get balance(): number {
    if (!this.decimals) {
      return this._balance 
    }

    let bal = this._balance / (10**this.decimals);
    console.log(bal)
    return bal;
  }

  set balance(value: number){
    console.log("Setter " + value);
    this._balance = value;
  }

  private _balance: number;

  public toSendableAmount(amount: number): number {
    if (!this.decimals) {
      return amount;
    }

    return amount * (10**this.decimals);
  }
}
