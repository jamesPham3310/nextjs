'use client';
import MenuBurgerSvg from '@/assets/icons/menu-burger.svg';
import { Button } from '@/components/atoms/Button';
import { ButtonLink } from '@/components/atoms/ButtonLink';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
const HEIGHT_NAV = 64;
const CLASS_STICKY = 'stick-nav';

function Header() {
  const [stickyClass, setStickyClass] = useState<string>('');
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > HEIGHT_NAV ? setStickyClass(CLASS_STICKY) : setStickyClass('');
    }
  };

  return (
    <header className="fixed w-full top-0 left-0 z-[1000]">
      <nav className={twMerge(stickyClass ? 'bg-white' : '', 'py-4 container mx-auto flex items-center justify-between')}>
        <div className="inline-flex items-center">
          <div className="w-[52px] h-[41px] lg:w-[80px] lg:h-[64px] relative">
            <Image src={'/images/logo.svg'} width={80} height={64} className="inset-0 absolute" alt="Logo" />
          </div>
          <ul className="xl:ml-[68px] lg:inline-flex hidden">
            {[
              {
                content: 'Thanksgiving Oxley',
                href: '#',
              },
              {
                content: 'Thanksgiving Cantonment',
                href: '#',
              },
              {
                content: 'About us',
                href: '#',
              },
              {
                content: 'Blog',
                href: '#',
              },
              {
                content: 'Contact Us',
                href: '#',
              },
            ].map((item: { content: string; href: string }) => {
              return (
                <li key={item.content}>
                  <Link href={item.href} className="font-nexa-trial lg:mr-2 xl:mr-8 text-sm lg:text-sm hover:underline">
                    {item.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row gap-1 justify-self-end">
          <div className="flex flex-row gap-1 lg:gap-6 items-center">
            <ButtonLink
              href="#"
              className="text-white font-nexa-trial font-extrabold bg-primary text-[10px] lg:text-sm px-2 py-1 lg:py-2 lg:px-3"
            >
              Book Oxley Now
            </ButtonLink>
            <ButtonLink
              href="#"
              className="text-white font-nexa-trial font-extrabold bg-secondary text-[10px] lg:text-sm px-2 py-1 lg:py-2 lg:px-3"
            >
              Book Cantonment Now
            </ButtonLink>
          </div>
          <Button onClick={() => setMenuOpened(!menuOpened)} className="block lg:hidden lg:py-2 lg:px-3">
            <MenuBurgerSvg width={24} height={24} />
          </Button>
        </div>
        <div
          className={`fixed inset-0 h-screen w-1/2 z-50 bg-secondary py-6 px-8  text-white ${
            menuOpened ? 'visible' : 'invisible'
          }`}
        >
          <ul className="">
            {[
              {
                content: 'Thanksgiving Oxley',
                href: '#',
              },
              {
                content: 'Thanksgiving Cantonment',
                href: '#',
              },
              {
                content: 'About us',
                href: '#',
              },
              {
                content: 'Blog',
                href: '#',
              },
              {
                content: 'Contact Us',
                href: '#',
              },
            ].map((item: { content: string; href: string }) => {
              return (
                <li key={item.content} className="my-4 text2-normal tracking-widest">
                  <Link href={item.href} className="font-nexa-trial lg:mr-2 xl:mr-8 text-sm lg:text-sm hover:underline">
                    {item.content}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
