import styles from './styles.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className={styles.error} role="alert">
    {message}
  </div>
);

export default ErrorMessage;
