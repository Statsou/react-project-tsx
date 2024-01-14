import { FormEvent, useState } from 'react';
import { Button } from '../../ui/button/button';
import { Input } from '../../ui/input/input';
import Title from '../../ui/title/title';
import styles from './subscribe.module.scss';


export function Subscribe() {
  const [email, setEmail] = useState('');

  function isValidEmail() {
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  const SendSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValidEmail()) {
      alert(`An application to join the club has been sent by email - ${email}`);
      setEmail('');
    }
  };

  return (
    <section className={styles['subscribe']}>
      <div className={styles['subscribe__content']}>
        <Title className={styles['subscribe__title']} headingLevel='h2' size='big'>Join the club and get the benefits</Title>
        <p className={styles['subscribe__description']}>
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <form onSubmit={SendSubmit}>
          <div className={styles['subscribe__under-wrapper']}>
            <Input
              className={styles['subscribe__input']}
              appereance='grey'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name='email'
            />
            <Button
              className={styles['subscribe__submit-button']}
              type='submit'
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
