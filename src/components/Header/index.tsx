import SearchBar from '@components/SearchBar';
import Button from '@shared/components/Button';
import { useTheme } from '@hooks';
import { pluralize } from '@utils';
import styles from './styles.module.css';

interface HeaderProps {
  search: string;
  total?: number;
  onSearchChange: (value: string) => void;
}

const Header = ({ search, total, onSearchChange }: HeaderProps) => {
  const { theme, toggle } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>Каталог пользователей</h1>
            {total !== undefined && (
              <span className={styles.total}>
                {total} {pluralize(total, 'пользователь', 'пользователя', 'пользователей')}
              </span>
            )}
          </div>
          <Button onClick={toggle} aria-label="Переключить тему" className={styles.themeBtn}>
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
        <SearchBar value={search} onChange={onSearchChange} />
      </div>
    </header>
  );
};

export default Header;
