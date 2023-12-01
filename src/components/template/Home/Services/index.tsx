import { ButtonLink } from '@/components/atoms/ButtonLink';
import ItemIcon from '@/components/atoms/ItemIcon';
import { twMerge } from 'tailwind-merge';
import { TItem, data } from './data';
import { dataThanksgiving } from './data_thanksgiving';

const BlockService = ({ data, className = '' }: { data: TItem[]; className?: string }) => {
  return (
    <div className={twMerge('grid grid-flow-col gap-y-3 gap-x-5 md:gap-y-6 md:gap-x-8', className)}>
      {data.map((item: TItem) => {
        return (
          <ItemIcon
            key={item.content}
            text={item.content}
            className={item.className}
            classContent="text4-normal lg:text2-normal"
            icon={{
              file: item.icon,
              className: 'mr-[15px] w-4 h-4 lg:w-8 lg:h-8 basic-[32px]',
              size: 32,
            }}
          />
        );
      })}
    </div>
  );
};
function ServiceComponent() {
  return (
    <div className="lg:px-36 mb-12 lg:mb-24.5">
      <h3 className="text-center mb-6 lg:mb-12 lg:px-44 text-secondary head4 lg:head3">
        What You Can Expect from Our Serviced Apartment in Singapore
      </h3>
      <div className="flex flex-col lg:gap-16 lg:flex-row mb-6 lg:mb-12">
        <div className="flex flex-col lg:basis-[165px] shrink-0 grow-0 text-center lg:text-left">
          <h3 className="mb-3 text-secondary head5 lg:head3">Facilities and Services</h3>
          <p className="mb-6 text3-normal lg:text2-normal">At Our Serviced Apartments in Singapore</p>
        </div>
        <BlockService data={data} className="grid-cols-2 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3" />
      </div>
      <div className="flex flex-col-reverse gap-6 lg:gap-16 lg:flex-row">
        <div className="flex flex-col lg:basis-[165px] shrink-0 grow-0 self-center lg:self-start lg:pt-4">
          <ButtonLink href="#" className="pl-0">
            <h6 className="head7 lg:head6 text-secondary underline">View Pet Policy</h6>
          </ButtonLink>
        </div>
        <div className="flex flex-col">
          <h6 className="text-secondary mb-3 lg:mb-6 head7 lg:head6">Only at Thanksgiving Oxley</h6>
          <BlockService data={dataThanksgiving} className="grid-cols-2 lg:grid-cols-3 grid-rows-5 lg:grid-rows-3" />
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
