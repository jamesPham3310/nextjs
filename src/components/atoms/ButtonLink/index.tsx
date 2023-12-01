import Link from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
interface IButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  href: string;
}
export function ButtonLink<ButtonLinkProps extends IButtonLinkProps>({
  children,
  href,
  className,
  ...buttonProps
}: ButtonLinkProps & { children?: ReactNode }) {
  return (
    <Link href={href} {...buttonProps} className={'rounded-[27px] lg:round-40 ' + (className || '')}>
      {children}
    </Link>
  );
}
