import Title from '../../ui/title/title';
import styles from './footer-list.module.scss';
import { Link } from 'react-router-dom';

const navigationLists = [
  {
    id: 1,
    title: 'Menu',
    links: [
      {
        id: 1,
        link: 'New arrivals',
        href: '/'
      },
      {
        id: 2,
        link: 'Best sellers',
        href: '/'
      },
      {
        id: 3,
        link: 'Recently viewed',
        href: '/'
      },
      {
        id: 4,
        link: 'Popular this week',
        href: '/'
      },
      {
        id: 5,
        link: 'All products',
        href: '/'
      }
    ]
  },
  {
    id: 2,
    title: 'Categories',
    links: [
      {
        id: 1,
        link: 'Crockery',
        href: '/'
      },
      {
        id: 2,
        link: 'Furniture',
        href: '/'
      },
      {
        id: 3,
        link: 'Homeware',
        href: '/'
      },
      {
        id: 4,
        link: 'Plant pots',
        href: '/'
      },
      {
        id: 5,
        link: 'Chairs',
        href: '/'
      },
      {
        id: 6,
        link: 'Crockery',
        href: '/'
      }
    ]
  },
  {
    id: 3,
    title: 'Our company',
    links: [
      {
        id: 1,
        link: 'About us',
        href: '/'
      },
      {
        id: 2,
        link: 'Vacancies',
        href: '/'
      },
      {
        id: 3,
        link: 'Contact us',
        href: '/'
      },
      {
        id: 4,
        link: 'Privacy',
        href: '/'
      },
      {
        id: 5,
        link: 'Returns policy',
        href: '/'
      }
    ]
  }
];

export function FooterList() {
  return (
    <ul className={styles['main-footer__list']}>
      {navigationLists.map((item) => (
        <li key={item.id} className={styles['main-footer__item']}>
          <Title headingLevel='h2' className={styles['main-footer__title']}>{item.title}</Title>
          <ul className={styles['main-footer__under-list']}>
            {item.links.map((link) => (
              <li key={link.id} className={styles['main-footer__under-item']}>
                <Link
                to={link.href}
                className={styles['main-footer__list-link']}>
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
