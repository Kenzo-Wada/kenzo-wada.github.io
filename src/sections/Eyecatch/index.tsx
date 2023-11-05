import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Button, Container, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

import * as style from '~/sections/Eyecatch/eyecatch.css';

const Eyecatch = () => {
  return (
    <section>
      <Flex direction={'column'} gap={'6'} mt={'9'}>
        <Container>
          <Text weight={'bold'} size={'9'} className={style.text}>
            Kenzo Wada.
            <br />
            Modern, Young and Friendly Frontend Enginner Ever.
          </Text>
        </Container>
        <Container>
          <Flex gap={'6'}>
            <Link href={'https://github.com/Kenzo-Wada'}>
              <Button size={'4'} variant="outline" className={style.OutlinedButton}>
                <GitHubLogoIcon width={24} height={24} /> Github
              </Button>
            </Link>
            <Link href={'https://twitter.com/unblockscrime'}>
              <Button size={'4'} className={style.FilledButton}>
                🤝 Contact Me!!
              </Button>
            </Link>
          </Flex>
        </Container>
      </Flex>
    </section>
  );
};

export default Eyecatch;
