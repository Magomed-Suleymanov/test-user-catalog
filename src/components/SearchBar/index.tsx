import { useId } from 'react';
import Button from '@shared/components/Button';
import Input from '@shared/components/Input';
import styles from './styles.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = 'Поиск по имени' }: SearchBarProps) => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.srOnly}>
        Поиск по имени
      </label>
      <span className={styles.icon} aria-hidden>
        🔍
      </span>
      <Input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
      />
      {value && (
        <Button
          className={styles.clear}
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button">
          ✕
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
