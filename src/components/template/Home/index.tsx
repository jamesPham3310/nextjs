import GalleryComponent from './Gallery';
import IntroduceComponent from './Introduce';
import NewsComponent from './News';
import ServiceComponent from './Services';
import Welcome from './Welcome';

function HomeTemplate() {
  return (
    <>
      <Welcome />
      <IntroduceComponent />
      <ServiceComponent />
      <GalleryComponent />
      <NewsComponent />
    </>
  );
}

export default HomeTemplate;
