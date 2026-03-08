export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: number;
  gender: 'male' | 'female';
  image: string;
  username: string;
  address: {
    city: string;
    country: string;
  };
  company: {
    name: string;
    department: string;
  };
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface FetchUsersParams {
  limit: number;
  skip: number;
}

export interface SearchUsersParams {
  q: string;
  limit: number;
  skip: number;
}
