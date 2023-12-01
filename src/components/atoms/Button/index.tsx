import { ButtonHTMLAttributes, ReactNode } from 'react';
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
export function Button<ButtonProps extends IButtonProps>({
  children,
  className,
  ...buttonProps
}: ButtonProps & { children?: ReactNode }) {
  return (
    <button {...buttonProps} className={'round-40 ' + className}>
      {children}
    </button>
  );
}
