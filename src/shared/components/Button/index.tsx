import { cn } from '@utils';
import styles from './styles.module.css';
import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Button = ({ className, active, ...props }: Props) => (
  <button className={cn(styles.btn, active && styles.active, className)} {...props} />
);

export default Button;
