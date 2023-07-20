import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import MagicCard from './components/magic-card';
import Wrapper from './components/wrapper';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <section className="container py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Wrapper
            title="Magic Card"
            subtitle="Spotlight"
            className={cn(
              '[--bg-bg:white] [--bg-hl:hsl(0_0%_0%/0.07)] [--border-hl:transparent]',
              'dark:[--bg-bg:black] dark:[--bg-hl:hsl(0_0%_100%/0.1)] dark:[--border-hl:transparent]',
            )}
          >
            <MagicCard />
          </Wrapper>

          <Wrapper
            title="Magic Card"
            subtitle="Magic border + spotlight"
            className={cn(
              '[--bg-bg:white] [--bg-hl:hsl(0_0%_0%/0.07)] [--border-hl:hsl(0_0%_0%/0.3)]',
              'dark:[--bg-bg:black] dark:[--bg-hl:hsl(0_0%_100%/0.1)] dark:[--border-hl:hsl(0_0%_100%/0.6)]',
            )}
          >
            <MagicCard />
          </Wrapper>
        </div>
      </section>
    </div>
  );
}
