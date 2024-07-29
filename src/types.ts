export interface Address {
  street: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}
