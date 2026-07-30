export interface ReviewLisVM {
  id: string;
  author: string;
  date: string;
  comment: string;
  rating: number;
}

export interface HouseVm {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  image: string;
  isBooked: boolean;
  reviews: ReviewLisVM[];
}
