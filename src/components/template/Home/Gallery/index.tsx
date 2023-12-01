import Image from 'next/image';
// import SliderComponent from './Slider';
import dynamic from 'next/dynamic';
import { twMerge } from 'tailwind-merge';
const SliderComponent = dynamic(() => import('./Slider'), {
  ssr: false,
});
export const ImageWrapper = ({ src, width, height, alt, wrapper, className }: any) => {
  return (
    <div className={wrapper}>
      <Image src={src} width={width} height={height} alt={alt} className={twMerge('rounded-[20px]', className)} />
    </div>
  );
};
function GalleryComponent() {
  return (
    <>
      <div className="mb-12 lg:mb-24.5">
        <h3 className="head5 lg:head3 text-center mb-3 text-secondary">Photo Gallery</h3>
        <p className="text-center mb-6 ">Book Serviced Apartments in Singapore Today</p>
        <div className="lg:block md:block hidden">
          <div className="flex flex-row gap-6 items-center">
            <ImageWrapper src="/images/image 8.png" width={245} height={240} alt="1" />
            <div className="flex flex-col gap-6  items-center">
              <ImageWrapper src="/images/Frame 39.png" width={245} height={160} alt="1" />
              <ImageWrapper src="/images/Frame 38.png" width={245} height={240} alt="1" />
            </div>
            <ImageWrapper src="/images/Frame 35.png" width={245} height={560} alt="1" />
            <div className="flex flex-col gap-6 items-center">
              <ImageWrapper src="/images/Frame 38 (1).png" width={245} height={240} alt="1" />
              <ImageWrapper src="/images/premium-1-bedroom.png" width={245} height={160} alt="1" />
            </div>
            <ImageWrapper src="/images/Frame 38 (2).png" width={245} height={240} alt="1" />
          </div>
        </div>
        <div className="block lg:hidden md:hidden">
          <SliderComponent
            data={[
              { src: '/images/image1.png', width: 154, height: 172, alt: '1' },
              { src: '/images/image2.png', width: 154, height: 172, alt: '1' },
              { src: '/images/image3.png', width: 154, height: 172, alt: '1' },
              { src: '/images/image1.png', width: 154, height: 172, alt: '1' },
              { src: '/images/image2.png', width: 154, height: 172, alt: '1' },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default GalleryComponent;
