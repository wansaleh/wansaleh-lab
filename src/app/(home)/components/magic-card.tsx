import { HTMLProps } from 'react';

import { cn } from '@/lib/utils';

export default function MagicCard({ className }: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative rounded-2xl bg-white p-8 dark:bg-black',

        'before:absolute before:inset-0 before:z-[1] before:rounded-[inherit] before:opacity-100 before:content-[""] before:[background:radial-gradient(var(--size,200px)_at_var(--mx)_var(--my),var(--border-hl),transparent_80%)_fixed]',

        'after:absolute after:inset-px after:z-[2] after:rounded-[inherit] after:opacity-100 after:content-[""] after:[background:var(--bg-bg)_radial-gradient(var(--size,200px)_at_var(--mx)_var(--my),var(--bg-hl),transparent_80%)_fixed]',

        className,
      )}
    >
      <div
        className={cn(
          'absolute inset-0 z-[0] rounded-[inherit] bg-gradient-to-b from-black/10 to-black/10 to-10% opacity-100 dark:from-white/[0.25] dark:to-white/10',
        )}
      >
        <div className="absolute inset-px rounded-[inherit] bg-white dark:bg-black" />
      </div>

      <div className="relative z-10">This is a magic card.</div>
    </div>
  );
}
