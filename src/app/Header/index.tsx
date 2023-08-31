import { Box, Button, Flex, Text } from '@radix-ui/themes';
import type { FC } from 'react';

import * as style from '~/app/Header/header.css';

export const Header: FC = () => {
  return (
    <Box className={style.wrapper}>
      <Flex display={'flex'} align={'center'} justify={'between'}>
        <Text weight={'bold'} size={'6'}>
          {"Kenzo's Portfolio"}
        </Text>
        <Button className={style.FilledButton}>🤝 contact me</Button>
      </Flex>
    </Box>
  );
};
