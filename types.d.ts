type CryptoDataPoint = {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string; // ISO date string
    tags: string[];
    max_supply: number;
    circulating_supply: number;
    total_supply: number;
    platform: {
      id: number;
      name: string;
      symbol: string;
      slug: string;
      token_address: string;
    };
    infinite_supply: boolean;
    cmc_rank: number;
    self_reported_circulating_supply: number | null;
    self_reported_market_cap: number | null;
    tvl_ratio: number | null;
    last_updated: string; // ISO date string
    quote: {
      USD: {
        price: number;
        volume_24h: number;
        volume_change_24h: number;
        percent_change_1h: number;
        percent_change_24h: number;
        percent_change_7d: number;
        percent_change_30d: number;
        percent_change_60d: number;
        percent_change_90d: number;
        market_cap: number;
        market_cap_dominance: number;
        fully_diluted_market_cap: number;
        tvl: number | null;
        last_updated: string; // ISO date string
      };
    };
  };
  