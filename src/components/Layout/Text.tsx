import type { DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextProps
  extends HTMLAttributes<
    | HTMLHeadingElement
    | HTMLSpanElement
    | HTMLParagraphElement
    | HTMLAnchorElement
  > {
  className?: string;
  as?: ElementType;
}

function Text({ className, as: Com = 'p', children, ...props }: TextProps) {
  return (
    <Com
      {...({
        ...props,
        children,
        className: twMerge(` text-primary-white `, className),
      } as DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>)}
    />
  );
}

export default Text;
