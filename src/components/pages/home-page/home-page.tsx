import { Hero } from '../../blocks/hero/hero';
import { Advantages } from '../../blocks/advantages/advantages';
import { New } from '../../blocks/new/new';
import { Popular } from '../../blocks/popular/popular';
import { Subscribe } from '../../blocks/subscribe/subscribe';
import { About } from '../../blocks/about/about';

function HomePage () {
  return (
    <>
      <Hero />
      <Advantages />
      <New />
      <Popular />
      <Subscribe />
      <About />
    </>
  );
}

export default HomePage;
