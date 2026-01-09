export interface Package {
  name: string;
  price: string;
  priceVal: number;
  durationVal?: number;
  tag?: 'best' | 'rec' | 'bulk';
  tagName?: string;
  saveText?: string;
  warranty: boolean;
  desc: string[];
}

export interface Product {
  id: string;
  name: string;
  image: string;
  cat: string[];
  packages: Package[];
}

export interface Testimonial {
  u: string;
  c: string;
  d: string;
}

export type PageView = 'home' | 'apps' | 'sosmed' | 'products';
export type FilterType = 'all' | 'populer' | 'new' | 'app' | 'editing' | 'music' | 'movie';