import { cn } from '@utils';
import styles from './styles.module.css';
import type { User } from '@models/user';

interface UserCardProps {
  user: User;
}

const genderLabel: Record<User['gender'], string> = {
  male: 'M',
  female: 'F',
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.avatarWrap}>
        <img
          className={styles.avatar}
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          loading="lazy"
          width={80}
          height={80}
        />
        <span className={cn(styles.genderBadge, styles[user.gender])}>
          {genderLabel[user.gender]}
        </span>
      </div>

      <div className={styles.body}>
        <h2 className={styles.name}>
          {user.firstName} {user.lastName}
        </h2>
        <p className={styles.username}>@{user.username}</p>

        <ul className={styles.meta}>
          <li>
            <span className={styles.metaIcon} aria-hidden>
              ✉
            </span>
            <a href={`mailto:${user.email}`} className={styles.link}>
              {user.email}
            </a>
          </li>
          <li>
            <span className={styles.metaIcon} aria-hidden>
              ☎
            </span>
            <span>{user.phone}</span>
          </li>
          <li>
            <span className={styles.metaIcon} aria-hidden>
              📍
            </span>
            <span>
              {user.address.city}, {user.address.country}
            </span>
          </li>
          <li>
            <span className={styles.metaIcon} aria-hidden>
              🏢
            </span>
            <span>
              {user.company.name} · {user.company.department}
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.footer}>
        <span className={styles.age}>Лет: {user.age}</span>
      </div>
    </article>
  );
};

export default UserCard;
