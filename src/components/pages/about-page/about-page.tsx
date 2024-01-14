import { AboutDesign } from '../../blocks/about-design/about-design';
import { AboutHeader } from '../../blocks/about-header/about-header';
import { AboutSale } from '../../blocks/about-sale/about-sale';
import { Advantages } from '../../blocks/advantages/advantages';
import { Subscribe } from '../../blocks/subscribe/subscribe';

function AboutPage () {
  return (
    <>
      <AboutHeader />
      <AboutSale />
      <AboutDesign />
      <Advantages />
      <Subscribe />
    </>
  );
}

export default AboutPage;
