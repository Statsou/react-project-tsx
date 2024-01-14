import styles from './footer-copyright.module.scss';
import { Link } from 'react-router-dom';

const socialLink = [
  {
    id: 1,
    alt: 'Page Linkedin.',
    image: '/src/assets/social-icon/linkedin.svg',
    href: '#'
  },
  {
    id: 2,
    alt: 'Page Facbook.',
    image: '/src/assets/social-icon/facebook.svg',
    href: '#'
  },
  {
    id: 3,
    alt: 'Page Instagram.',
    image: '/src/assets/social-icon/instagram.svg',
    href: '#'
  },
  {
    id: 4,
    alt: 'Page Skype.',
    image: '/src/assets/social-icon/skype.svg',
    href: '#'
  },
  {
    id: 5,
    alt: 'Page Twitter.',
    image: '/src/assets/social-icon/twitter.svg',
    href: '#'
  },
  {
    id: 6,
    alt: 'Page Pinterest.',
    image: '/src/assets/social-icon/pinterest.svg',
    href: '#'
  }
];

export function FooterCopyright() {
  return (
    <div className={styles['main-footer__copyright-wrapper']}>
      <span className={styles['main-footer__copyright']}>Copyright 2022 Avion LTD</span>
      <ul className={styles['main-footer__socal-list']}>
        {socialLink.map((link) => (
          <li className={styles['main-footer__socal-item']} key={link.id}>
            <Link className={styles['main-footer__socal-link']} to={link.href}>
              <img src={link.image} alt={link.alt} width={19} height={19} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
