import Link from 'next/link';
import { clsx } from 'clsx';

type Variant = 'primary' | 'outline' | 'outline-white' | 'dark';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  'outline-white': 'btn-outline-white',
  dark: 'btn-dark',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = clsx(variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={clsx(classes, disabled && 'opacity-60 cursor-not-allowed')}>
      {children}
    </button>
  );
}
