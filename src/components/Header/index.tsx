import { Box, Button, Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

import * as style from '~/components/Header/header.css';

const Header = () => {
  return (
    <Box className={style.wrapper} position={'sticky'} p={'3'}>
      <Flex display={'flex'} align={'center'} justify={'between'}>
        <Text weight={'bold'} size={'6'}>
          {"Kenzo's Portfolio"}
        </Text>
        <Link href={'https://twitter.com/unblockscrime'}>
          <Button className={style.FilledButton}>🤝 contact me</Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
