'use client';

import { HTMLProps, useRef } from 'react';
import { m } from 'framer-motion';

import useGetPosition from '@/lib/use-get-position';
import { cn } from '@/lib/utils';

export default function MagicBox({ className }: HTMLProps<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  const { styles } = useGetPosition(ref);

  return (
    <m.div
      ref={ref}
      style={styles}
      className={cn(
        'group/magic relative overflow-hidden rounded-[var(--magic-radius,0.5rem)] bg-[var(--magic-bg-to)]',

        '[background-image:radial-gradient(var(--magic-size,200px)_at_var(--x,var(--mx))_var(--y,var(--my)),hsl(var(--magic-bg-hl)/0.05),transparent_50%),linear-gradient(160deg,hsl(var(--magic-bg-from)/1),hsl(var(--magic-bg-to)/1)_40%)]',

        // '[box-shadow:inset_0_1px_0_hsl(0_0%_100%/0.2),inset_0_-1px_0_hsl(0_0%_100%/0.03)]',

        'before:padding-mask before:absolute before:inset-0 before:z-0 before:rounded-[inherit] before:opacity-[var(--magic-opacity,1)] before:content-[""] before:[background-image:radial-gradient(var(--magic-size,200px)_at_var(--x,var(--mx))_var(--y,var(--my)),hsl(var(--magic-border-hl)/0.5),transparent_50%),linear-gradient(175deg,hsl(var(--magic-border-from)/0.5),hsl(var(--magic-border-to)/0.5)_30%)]',

        className,
      )}
    >
      <div className="relative z-10">This is a magic card.</div>
    </m.div>
  );
}
