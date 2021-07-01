export type Address = {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  street: string;
  place: string;
  postcode: string;
  country: string;
  phone: string;
  email: string;
};

export type InputAddress = Omit<Address, 'id'> & { id?: number };
