'use client';
import IconChevronMobileSvg from '@/assets/icons/icon-chevron-mobile.svg';
import IconChevronSvg from '@/assets/icons/icon-chevron.svg';
import { useEffect } from 'react';

function ScrollComponent() {
  useEffect(() => {
    const scrollFn = () => {
      let scroll = document.getElementById('scroll');
      let totalScroll = document.documentElement.scrollTop;
      if (scroll) {
        if (totalScroll > 1000) {
          scroll.style.opacity = '1';
        } else {
          scroll.style.opacity = '0';
        }
        scroll.addEventListener('click', (e: MouseEvent) => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
          e.preventDefault();
        });
      }
    };

    window.addEventListener('scroll', scrollFn);
    return () => window.removeEventListener('scroll', scrollFn);
  }, []);

  return (
    <div id="scroll" className="fixed bottom-[36px] left-[38px] opacity-0 cursor-pointer">
      <IconChevronSvg className="hidden lg:block h-[20px] w-[34px]" />
      <IconChevronSvg className="hidden lg:block h-[20px] w-[34px]" />
      <IconChevronMobileSvg className="block lg:hidden h-[11px] w-[19px]" />
      <IconChevronMobileSvg className="block lg:hidden h-[11px] w-[19px]" />
    </div>
  );
}

export default ScrollComponent;
