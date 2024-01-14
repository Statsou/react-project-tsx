import { Link } from 'react-router-dom';
import { Button } from '../../ui/button/button';
import Title from '../../ui/title/title';
import styles from './about-header.module.scss';
import { AppRoute } from '../../../appRoute';

export function AboutHeader () {
  return (
    <section className={styles['about-header']}>
        <Title className={styles['about-header__title']} headingLevel='h1' size="big">A brand built on the love of craftmanship,<br /> quality and outstanding customer service</Title>
        <Button className={styles['about-header__button']} buttonType={Link} link={AppRoute.BUY} appereance='light-grey'>View our products</Button>
    </section>
  );
}
