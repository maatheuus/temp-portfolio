interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <section
      className={`mx-auto max-w-[43.563rem] lg:max-w-[60rem] space-y-12 md:space-y-16 lg:space-y-20 ${className || ''}`}
      {...props}
    >
      {children}
    </section>
  );
}
