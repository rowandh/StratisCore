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

  balance: number;
}
