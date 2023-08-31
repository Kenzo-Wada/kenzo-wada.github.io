import { Badge, Box, Container, Flex, Text } from '@radix-ui/themes';
import type { FC } from 'react';

export const Skills: FC = () => {
  return (
    <Flex direction={'column'} gap={'6'} mt={'9'}>
      <Container>
        <Flex display={'flex'} justify={'center'}>
          <Text weight={'bold'} size={'9'}>
            # Skills.
          </Text>
        </Flex>
        <Flex direction={'column'} gap={'3'}>
          <Text weight={'bold'} size={'8'}>
            [Frontend Framework]
          </Text>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- React.js</Text>
            <Box>
              <Badge color="crimson">Skilled</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Next.js</Text>
            <Box>
              <Badge color="crimson">Skilled</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- vite.js</Text>
            <Box>
              <Badge color="crimson">Skilled</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Astro.js</Text>
            <Box>
              <Badge color="teal">Able</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Gatsby</Text>
            <Box>
              <Badge color="teal">Able</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Solid.js</Text>
            <Box>
              <Badge color="indigo">Interested</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Svelte</Text>
            <Box>
              <Badge color="indigo">Interested</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- Remix</Text>
            <Box>
              <Badge color="indigo">Interested</Badge>
            </Box>
          </Flex>
          <Flex display={'flex'} align={'center'} gap={'3'}>
            <Text size={'6'}>- qwik</Text>
            <Box>
              <Badge color="indigo">Interested</Badge>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};
