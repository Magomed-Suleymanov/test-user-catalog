import { cn } from '@utils';
import styles from './styles.module.css';
import type { InputHTMLAttributes } from 'react';

const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn(styles.input, className)} {...props} />
);

export default Input;
