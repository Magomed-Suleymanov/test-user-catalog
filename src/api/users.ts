import axios from 'axios';
import type { UsersResponse, FetchUsersParams, SearchUsersParams } from '../models/user';

const BASE_URL = 'https://dummyjson.com';

const api = axios.create({ baseURL: BASE_URL });

export const fetchUsers = async ({ limit, skip }: FetchUsersParams): Promise<UsersResponse> => {
  const { data } = await api.get<UsersResponse>('/users', {
    params: {
      limit,
      skip,
      select: 'id,firstName,lastName,email,phone,age,gender,image,username,address,company',
    },
  });
  return data;
};

export const searchUsers = async ({
  q,
  limit,
  skip,
}: SearchUsersParams): Promise<UsersResponse> => {
  const { data } = await api.get<UsersResponse>('/users/search', {
    params: {
      q,
      limit,
      skip,
      select: 'id,firstName,lastName,email,phone,age,gender,image,username,address,company',
    },
  });
  return data;
};
