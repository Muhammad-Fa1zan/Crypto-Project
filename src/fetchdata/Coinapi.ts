export interface CoinType {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    price_change_percentage_24h: number;
    market_cap_rank: number;
}

export const fetchCoins = async (page: number): Promise<CoinType[]> => {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=${page}&sparkline=false`);
  if (!res.ok) throw new Error("Failed to fetch coins");

  return res.json();
};

