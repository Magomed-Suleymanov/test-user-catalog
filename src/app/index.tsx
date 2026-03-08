import { useState } from 'react';

import UserCard from '@components/UserCard';
import Header from '@components/Header';
import SkeletonCard from '@components/SkeletonCard';
import Pagination from '@components/Pagination';
import ErrorMessage from '@shared/components/ErrorMessage';
import EmptyState from '@shared/components/EmptyState';
import { cn } from '@utils';
import { PAGE_LIMIT } from '@constants';
import { useDebounce, useUsers } from '@hooks';
import styles from './styles.module.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 400);

  const { data, isLoading, isError, isFetching } = useUsers({ page, search: debouncedSearch });

  const totalPages = data ? Math.ceil(data.total / PAGE_LIMIT) : 0;

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.layout}>
      <Header search={search} total={data?.total} onSearchChange={handleSearchChange} />

      <main className={styles.main}>
        {isError && (
          <ErrorMessage message="Ошибка загрузки пользователей. Пожалуйста, проверьте свое соединение и повторите снова." />
        )}

        {!isError && (
          <>
            <div
              className={cn(styles.grid, isFetching && !isLoading && styles.dimmed)}
              aria-live="polite"
              aria-busy={isLoading}>
              {isLoading
                ? Array.from({ length: PAGE_LIMIT }).map((_, i) => <SkeletonCard key={i} />)
                : data?.users.map((user) => <UserCard key={user.id} user={user} />)}
            </div>

            {!isLoading && data?.users.length === 0 && <EmptyState query={debouncedSearch} />}

            {!isLoading && totalPages > 1 && (
              <div className={styles.paginationWrap}>
                <Pagination page={page} totalPages={totalPages} onPageChange={handlePageChange} />
                <p className={styles.pageInfo}>
                  Страница {page} из {totalPages}
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
