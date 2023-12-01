import { ButtonLink } from '@/components/atoms/ButtonLink';

export const BlogComponent = ({ image, title, description, price, href }: any) => {
  // console.log(image.url);
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[42px]">
      <div className="grow shrink-0 basic-[260px] lg:basic-[511px]">
        <img src={image.url} alt={image.alt} className="rounded-[20px] w-full h-auto" />
      </div>
      <div className="flex flex-col gap-3 lg:gap-6 justify-center">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-6 items-start">
          <h4 className="head6 lg:head4">{title}</h4>
          <p className="border py-2 px-3 border-primary rounded-tl-[20px] rounded-br-[20px] text-primary text4-bold lg:text2-bold">
            {price}
          </p>
        </div>
        <p className="text3-normal lg:text2-normal">{description}</p>
        <div className="inline-flex justify-right lg:justify-between lg:flex-row flex-col-reverse gap-3 lg:gap-6 items-end">
          <div className="flex flex-row justify-between w-full lg:w-auto gap-3">
            <ButtonLink href={href} className="text-secondary border-secondary px-3 py-2 border head7 lg:head-btn">
              Virtual Viewing
            </ButtonLink>
            <ButtonLink href={href} className="text-white px-3 py-2 bg-primary head7 lg:head-btn">
              Reserve Your Stay
            </ButtonLink>
          </div>
          <ButtonLink href={href} className="self-end">
            <h6 className="text-secondary underline head7 lg:head6-btn"> Discover More</h6>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};
