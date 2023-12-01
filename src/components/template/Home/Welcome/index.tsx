import { ButtonLink } from '@/components/atoms/ButtonLink';

function Welcome() {
  return (
    <div className="w-full flex flex-col lg:items-center lg:flex-row gap-6 lg:gap-12 mb-12 lg:mb-24.5">
      <div className="grow shrink-0 lg:basic-3/5">
        <iframe
          src="https://www.youtube.com/embed/99jkGbsgp3o?si=jwt3DB1w5GiEj51L"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className=" rounded-[20px] w-full h-[184px] md:h-[318px] lg:h-[432px]"
        ></iframe>
      </div>
      <div>
        <h1 className="mb-3 lg:mv-6 max-w-full flex lg:flex-col head4 lg:head1">
          <span className="whitespace-nowrap">Big Room,</span> <span>Bigger Smile</span>
        </h1>
        <p className="lg:text-2lg mb-6 lg:mb-12 text3-normal">We take your happiness to heart!</p>
        <div className="inline-block">
          <div>
            <ButtonLink href="" className="text-white font-nexa-trial px-6 py-3 font-bold bg-primary mr-3 text-[10px] lg:text-lg">
              Book Olgey
            </ButtonLink>
            <ButtonLink
              href=""
              className="text-white font-nexa-trial px-6 py-3 font-bold bg-secondary ml-3 text-[10px] lg:text-lg"
            >
              Book Cantonment
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
