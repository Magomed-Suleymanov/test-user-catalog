import { Component, type ReactNode } from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <h2 className={styles.title}>Что-то пошло не так :/</h2>
          <p className={styles.message}>
            Произошла непредвиденная ошибка. Пожалуйста, перезагрузите страницу.
          </p>
          <button className={styles.btn} onClick={() => window.location.reload()}>
            Обновить
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
