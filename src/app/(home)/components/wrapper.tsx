import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export default function Wrapper({
  title,
  subtitle,
  className,
  children,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
} & HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn(className)}>
      <h3 className="mb-1 text-2xl font-bold">{title}</h3>
      <h4 className="mb-4 text-sm font-medium text-gray-500">{subtitle}</h4>

      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-gray-500/20 p-10">
        <div className="relative z-10">{children}</div>

        <div className="absolute inset-0 opacity-10 [background-size:500px] [background:url(/grid-pattern.png)]" />
      </div>
    </div>
  );
}
