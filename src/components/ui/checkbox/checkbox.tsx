import styles from './checkbox.module.scss';
import { CheckboxProps } from './checkbox.props';

export function Checkbox ({ labelComponent, text, name, value, isChecked }: CheckboxProps) {
  const LabelComponent = labelComponent;

  return (
    <>
      <label>
        <input
          className={styles['visually-hidden-input']}
          type='checkbox'
          name={name}
          value={value}
          checked={isChecked}
        />
        <LabelComponent className={styles['checkbox']} isChecked={isChecked}>{text}</LabelComponent>
      </label>
    </>
  );
}
