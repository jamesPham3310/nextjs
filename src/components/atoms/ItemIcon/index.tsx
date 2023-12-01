import { ReactElement, cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';

type TIconProps = {
  file: ReactElement;
  size?: number;
  className?: string;
};

function ItemIcon({
  icon,
  className = '',
  text,
  classContent,
}: {
  icon?: TIconProps;
  className?: string;
  text: string;
  classContent: string;
}) {
  return (
    <div className={twMerge('flex flex-row items-center', className)}>
      {icon &&
        cloneElement(icon.file, {
          ...icon.file.props, // preserve existing props
          width: `${icon.size || 32}px`,
          height: `${icon.size || 32}px`,
          className: twMerge('grow-0 shrink-0', icon.className),
          viewBox: `0 0 ${icon.size} ${icon.size}`,
        })}
      <span className={classContent}>{text}</span>
      {/* text3-bold lg:text1-medium */}
    </div>
  );
}

export default ItemIcon;
// icon && icon.file ? (
