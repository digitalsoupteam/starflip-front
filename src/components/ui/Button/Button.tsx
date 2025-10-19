import clsx from 'clsx';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';

type ButtonProps =
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined });

type IButtonProps = ButtonProps & {
  visualType: 'primary' | 'secondary';
  size: 'lg' | 'md' | 'sm';
};

const Button: FC<IButtonProps> = ({ children, className, href, visualType, size, ...props }) => {
  const VISUAL_TYPES = {
    primary: clsx(
      'bg-pink-purple bg-size-[auto_200%] text-white',
      'hover:not-disabled:bg-position-[0_100%] focus-visible:not-disabled:bg-position-[0_100%] disabled:opacity-50'
    ),
    secondary: clsx(
      'text-white uppercase bg-purple-purple shadow-[0_0_20px_#9d00ff] text-shadow-[0_0_10px_#fff]',
      'hover:shadow-none focus-visible:shadow-none',
      'active:text-shadow-none'
    ),
  };

  const SIZES = {
    lg: 'py-2.5 px-10 text-xl',
    md: 'py-[5px] px-5 text-xl',
    sm: 'py-[5px] px-2 text-base text-shadow-[0_0_13px_#fff]',
  };

  const commonClassName = clsx(
    'font-bold h-fit not-disabled:cursor-pointer inline-flex items-center justify-center tr-d-all rounded-[10px]',
    VISUAL_TYPES[visualType],
    SIZES[size],
    className
  );

  if (href)
    return (
      <a className={commonClassName} href={href} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );

  return (
    <button className={commonClassName} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
