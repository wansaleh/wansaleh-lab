import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import MagicBox from './components/magic-box';
import Wrapper from './components/wrapper';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <section className="container py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Wrapper title="Magic Card" subtitle="Spotlight">
            <MagicBox
              className={cn(
                // '[--magic-bg-hl:0_0%_0%] [--magic-bg:white] [--magic-border-hl:transparent]',
                // 'dark:[--magic-bg-hl:0_0%_100%] dark:[--magic-bg:black] dark:[--magic-border-hl:transparent]',

                'before:hidden',

                'p-8',
              )}
            />
          </Wrapper>

          <Wrapper title="Magic Card" subtitle="Magic border + spotlight">
            <MagicBox
              className={cn(
                // '[--magic-bg-hl:0_0%_0%] [--magic-bg:white] [--magic-border-hl:transparent]',
                // 'dark:[--magic-bg-hl:0_0%_100%] dark:[--magic-bg:black] dark:[--magic-border-hl:transparent]',

                'p-8',
              )}
            />
          </Wrapper>
        </div>
      </section>
    </div>
  );
}
