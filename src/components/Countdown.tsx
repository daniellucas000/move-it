import { useState, useEffect } from 'react';
import { StringDecoder } from 'string_decoder';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const [time, setTime] = useState(25 * 60); //25 * 60 = 25 min em seg
  const [active, setActive] = useState(false);

  // time = 1500 / minutes = 1500 / 60 = 25 math.floor para arredondar
  // seconds pega o resto da divisão
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // padStart verifica se a string contem 2 caracteres
  // se não tiver adiciona 0 ao inicio
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}
