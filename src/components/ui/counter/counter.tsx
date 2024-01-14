import { useState } from 'react';
import styles from './counter.module.scss';
import { CounterProps } from './counter.props';

export function Counter({ onChange, minValue = 1 }: CounterProps) {
  const [value, setValue] = useState(1);
  const isDisabledMinus = value === minValue;

  function handleClick(newValue: number) {
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }

  return (
    <div className={styles['counter']}>
      <button
        className={styles['counter__button']}
        type='button'
        disabled={isDisabledMinus}
        onClick={() => handleClick(value - 1)}
      >
        -
      </button>

      <input
        className={styles['counter__input']}
        type='number'
        value={value}
        size={1}
        onChange={(e) => {
          setValue(Number(e.target.value));
          onChange?.(value < minValue ? minValue : value);
        }}
      />

      <button
        className={styles['counter__button']}
        type='button'
        onClick={() => handleClick(value + 1)}
      >
        +
      </button>
    </div>
  );
}
