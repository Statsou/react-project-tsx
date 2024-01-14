import { FormEvent, useState } from 'react';
import { FooterCopyright } from '../../blocks/footer-copyright/footer-copyright';
import { FooterList } from '../../blocks/footer-list/footer-list';
import { Button } from '../../ui/button/button';
import { Input } from '../../ui/input/input';
import Title from '../../ui/title/title';
import styles from './footer.module.scss';


export function Footer() {
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
    <footer className={styles['main-footer']}>
      <div className={styles['main-footer__wrapper']}>
        <FooterList />
        <form onSubmit={SendSubmit}>
          <div className={styles['main-footer__feedback']}>
            <Title headingLevel='h2' className={styles['main-footer__title']}>Join our mailing list</Title>
            <div className={styles['main-footer__under-wrapper']}>
              <Input
                className={styles['main-footer__input']}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className={styles['main-footer__submit-button']}
                appereance='white'
                type='submit'
              >
                Sign up
              </Button>
            </div>
          </div>
        </form>
        <FooterCopyright />
      </div>
    </footer>
  );
}
