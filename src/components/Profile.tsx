import { ChallengesContext } from '@/contexts/ChallengesContexts';
import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25634.png"
        alt="Profile Img"
      />
      <div>
        <strong>Username</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
