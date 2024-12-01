import { twMerge } from 'tailwind-merge';
import Text from './Text';

interface HeadingProps {
  children: string;
  className?: string;
}
export default function Heading({
  children,
  className,
  ...props
}: HeadingProps) {
  return (
    <Text
      className={twMerge(
        'text-3xl leading-tight tracking-[-0.045em] text-primary-white sm:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
