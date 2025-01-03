export interface Fund {
  schemeCode: number;
  schemeName: string;
  nav: string;
  date: string;
}

export interface SearchResult {
  funds: Fund[];
  loading: boolean;
  error: string | null;
}

export interface WishlistContextType {
  fundWishlist: Fund[];
  stockWishlist: Stock[];
  addToWishlist: (item: Fund | Stock) => void;
  removeFromWishlist: (id: number | string, type: 'fund' | 'stock') => void;
  isInWishlist: (id: number | string, type: 'fund' | 'stock') => boolean;
}