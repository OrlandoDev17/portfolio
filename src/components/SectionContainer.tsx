import type { ReactNode } from 'react';

interface sectionContainerProps {
  className?: string;
  id?: string;
  icon?: React.ComponentType;
  title?: string;
  paragraph?: string;
  children?: ReactNode;
}

export default function SectionContainer({
  className,
  id,
  icon: Icon,
  title,
  paragraph,
  children,
}: sectionContainerProps) {
  return (
    <section id={id} className={`${className}`}>
      <div>
        <h2>
          {Icon && <Icon />}
          {title}
        </h2>
        <p>{paragraph}</p>
      </div>
      {children}
    </section>
  );
}
