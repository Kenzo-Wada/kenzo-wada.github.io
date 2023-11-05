import { Box, Button, Flex, Text } from '@radix-ui/themes';

import * as style from '~/components/Header/header.css';

const Header = () => {
  return (
    <section>
      <Box className={style.wrapper} position={'sticky'} p={'3'}>
        <Flex display={'flex'} align={'center'} justify={'between'}>
          <Text weight={'bold'} size={'6'}>
            {"Kenzo's Portfolio"}
          </Text>
          <Button className={style.FilledButton}>🤝 contact me</Button>
        </Flex>
      </Box>
    </section>
  );
};

export default Header;
