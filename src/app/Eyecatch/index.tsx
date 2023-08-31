import { Button, Container, Flex, Text } from '@radix-ui/themes';
import type { FC } from 'react';

import * as style from '~/app/Eyecatch/eyecatch.css';

export const Eyecatch: FC = () => {
  return (
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
          <Button size={'4'} variant="outline" className={style.OutlinedButton}>
            ❤️ about me
          </Button>
          <Button size={'4'} className={style.FilledButton}>
            🤝 Contact Me!!
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
