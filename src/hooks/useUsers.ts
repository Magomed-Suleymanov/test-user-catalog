import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchUsers, searchUsers } from '../api/users';
import { PAGE_LIMIT } from '@constants/index';
import type { User } from '@models/user';

interface UseUsersProps {
  page: number;
  search: string;
}

interface UseUsersResult {
  users: User[];
  total: number;
}

export const useUsers = ({ page, search }: UseUsersProps) => {
  const skip = (page - 1) * PAGE_LIMIT;

  return useQuery<UseUsersResult>({
    queryKey: ['users', page, search],
    queryFn: () =>
      search.trim()
        ? searchUsers({ q: search.trim(), limit: PAGE_LIMIT, skip })
        : fetchUsers({ limit: PAGE_LIMIT, skip }),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
};
