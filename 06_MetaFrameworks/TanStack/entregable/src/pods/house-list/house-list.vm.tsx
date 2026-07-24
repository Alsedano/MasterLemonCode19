export interface ReviewList {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}

export interface HouseList {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  price: number;
  image: string;
  amenities: string[];
  reviews: ReviewList[];
}
