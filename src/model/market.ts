export type Coin = {
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
};

export type Market = {
  title: string;
  list: Coin[];
};

export type Summary = {
  marketId: number;
  market: string;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
};
