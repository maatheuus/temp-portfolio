import { twMerge } from 'tailwind-merge';
import Text from './Text';

interface HeadingProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export default function Heading({ children, className, as }: HeadingProps) {
  return (
    <Text
      className={twMerge(
        'text-3xl leading-tight tracking-[-0.045em] text-primary-white sm:text-4xl',
        className,
      )}
      as={as}
    >
      {children}
    </Text>
  );
}
