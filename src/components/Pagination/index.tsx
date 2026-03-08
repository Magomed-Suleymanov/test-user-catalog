import Button from '@shared/components/Button';
import styles from './styles.module.css';

interface PageRange {
  current: number;
  total: number;
}

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getPageRange = ({ current, total }: PageRange): (number | '…')[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | '…')[] = [1];

  if (current > 3) pages.push('…');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push('…');

  pages.push(total);

  return pages;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = getPageRange({ current: page, total: totalPages });

  return (
    <nav className={styles.nav} aria-label="Pagination">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page">
        ‹
      </Button>

      {pages.map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className={styles.ellipsis}>
            {p}
          </span>
        ) : (
          <Button
            key={p}
            active={p === page}
            onClick={() => onPageChange(p)}
            aria-label={`Page ${p}`}
            aria-current={p === page ? 'page' : undefined}>
            {p}
          </Button>
        ),
      )}

      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page">
        ›
      </Button>
    </nav>
  );
};

export default Pagination;
