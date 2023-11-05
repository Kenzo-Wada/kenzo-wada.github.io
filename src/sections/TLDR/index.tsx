import { Flex, Text } from '@radix-ui/themes';

import { SectionLayout } from '~/layouts/SectionLayout';

const Tldr = () => {
  return (
    <SectionLayout title="TL;DR" id="tldr">
      <Flex direction="column" gap="3">
        <Text size="6">- A frontend engineer who loves modern technologies.</Text>
        <Text size="6">- I can create a product with optimized logic and readable code using Next.js.</Text>
        <Text size="6">
          - Three years of engineering experience, fresh out of college in my first year. Super young, but skilled.
        </Text>
        <Text size="6">- Super friendly, yet powerful.</Text>
      </Flex>
    </SectionLayout>
  );
};

export default Tldr;
