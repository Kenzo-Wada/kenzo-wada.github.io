import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '~/styles/globalStyles.css';
import '~/styles/theme-config.css';
import type { Metadata } from 'next';
import { Caveat } from 'next/font/google';
import type { ReactNode } from 'react';

import { Header } from '~/app/Header';

interface Props {
  children: ReactNode;
}

const font = Caveat({ subsets: ['latin'], display: 'swap', variable: '--font-caveat' });

export const metadata: Metadata = {
  title: 'Kenzo Wada',
  description: 'portfolio of kenzo.',
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={font.className}>
        <Theme radius='large' hasBackground={false}>
          <Header />
          {children}
        </Theme>
      </body>
    </html>
  );
};

export default RootLayout;
