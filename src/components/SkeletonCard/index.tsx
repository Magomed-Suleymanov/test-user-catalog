import { cn } from '@utils';
import styles from './styles.module.css';

const SkeletonCard = () => {
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.avatar} />
      <div className={styles.lines}>
        <div className={cn(styles.line, styles.name)} />
        <div className={cn(styles.line, styles.username)} />
        <div className={cn(styles.line, styles.meta)} />
        <div className={cn(styles.line, styles.meta)} />
        <div className={cn(styles.line, styles.metaShort)} />
      </div>
    </div>
  );
};

export default SkeletonCard;
