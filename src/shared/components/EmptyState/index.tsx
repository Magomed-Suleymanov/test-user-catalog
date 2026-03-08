import styles from './styles.module.css';

interface EmptyStateProps {
  query: string;
}

const EmptyState = ({ query }: EmptyStateProps) => (
  <div className={styles.empty}>
    <p>
      Пользователь &ldquo;<strong>{query}</strong>&rdquo; не найден.
    </p>
  </div>
);

export default EmptyState;
