'use client';
import LocaltionSvg from '@/assets/icons/icon-location-green.svg';
import { Button } from '@/components/atoms/Button';
import ItemIcon from '@/components/atoms/ItemIcon';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BlogComponent } from './Blog';
import SliderComponent from './Slider';
import { data } from './data';
import { data_tab } from './data_tab';

function NewsComponent() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [blogs, setBlogs] = useState<any>([]);

  useEffect(() => {
    setBlogs(data);
  }, []);

  return (
    <div className="lg:px-36 mb-14 lg:mb-24.5">
      <div className="mb-3 lg:mb-6">
        <div className="flex flex-row gap-3 lg:gap-6 justify-center">
          <Button
            className={twMerge(
              'px-3 w-[148px] h-[58px] lg:w-auto lg:h-[53px] border text3-bold lg:text-btn',
              tabIndex === 0 ? 'bg-primary text-white' : 'border-secondary'
            )}
            onClick={() => {
              setTabIndex(0);
              setBlogs(data);
            }}
          >
            Orchard & River Valley
          </Button>
          <Button
            className={twMerge(
              'px-3 w-[148px] h-[58px] lg:w-auto lg:h-[53px] border text3-bold lg:text-btn',
              tabIndex === 1 ? 'bg-primary text-white' : 'border-secondary'
            )}
            onClick={() => {
              setTabIndex(1);
              setBlogs(data_tab);
            }}
          >
            Downtown & CBD
          </Button>
        </div>
        <h3 className="head5 lg:head3 text-center my-3 lg:mt-6 text-secondary">Thanksgiving Serviced Residence at Olgey</h3>
        <div className="text-center mb-6 lg:mb-12">
          <ItemIcon
            text={'328 River Valley Road, Singapore 238360'}
            className="text-primary justify-center"
            classContent="text3-bold lg:text1-medium"
            icon={{
              file: <LocaltionSvg />,
              className: 'text-primary mr-1 lg:mr-3 w-6 h-6',
              size: 24,
            }}
          />
        </div>
      </div>
      {/* <div className="flex flex-col gap-6 lg:gap-8"> */}
      <div className="flex flex-col gap-6 lg:gap-8 lg:block md:block hidden">
        {blogs.map((item: any) => {
          return <BlogComponent key={item.title} {...item} />;
        })}
      </div>
      <div className="block lg:hidden md:hidden">
        <SliderComponent data={blogs} />
      </div>
    </div>
  );
}

export default NewsComponent;
