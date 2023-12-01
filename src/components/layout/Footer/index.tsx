import IconLocationSvg from '@/assets/icons/icon-location.svg';
import IconMailSvg from '@/assets/icons/icon-mail.svg';
import IconPhoneSvg from '@/assets/icons/icon-phone.svg';
import IconWhatappSvg from '@/assets/icons/icon-whatsapp.svg';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="container w-full pb-4">
      <div className="ml-auto w-fit">
        <div className="flex flex-col gap-[18px]">
          <div className="rounded-full bg-secondary w-[40px] h-[35px] flex items-center justify-center hover:bg-primary">
            <Link href={'#'}>
              <IconLocationSvg />
            </Link>
          </div>
          <div className="group rounded-full bg-secondary w-[40px] h-[35px] flex items-center justify-center relative hover:bg-primary">
            <IconPhoneSvg />
            <div className="absolute top-[-16px] right-[30px] hidden group-hover:block pr-2">
              <div
                className="px-3 py-2 bg-primary inline-flex flex-col items-center gap-1 rounded-[10px] whitespace-nowrap"
                style={{ boxShadow: '2px 3px 5px 0px rgba(0, 0, 0, 0.08)' }}
              >
                <div>
                  <p className="text-white text5">General Enquiries</p>
                  <p className="text-white text4-bold">
                    <Link href={'tel:+'}>+65 6235 2064</Link>
                  </p>
                </div>
                <div>
                  <p className="text-white text5">Sales Enquiries</p>
                  <p className="text-white text4-bold">
                    <Link href={'tel:+'}>+65 9338 6098</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-secondary w-[40px] h-[35px] flex items-center justify-center hover:bg-primary">
            <Link href={'mailto:#'}>
              <IconMailSvg />
            </Link>
          </div>
          <div className="rounded-full bg-secondary w-[40px] h-[35px] flex items-center justify-center hover:bg-primary">
            <Link href={'#'}>
              <IconWhatappSvg />
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs text-black text-left md:text-center">Thanksgiving residence pte ltd @ 2023. All rights reserved</p>
    </footer>
  );
}

export default Footer;
