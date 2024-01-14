import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Outlet } from 'react-router-dom';
import ScrollTop from '../../ui/scroll-top/scroll-top';

function PageWrapper () {
  return (
    <>
      <ScrollTop />

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
