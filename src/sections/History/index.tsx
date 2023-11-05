import { Flex, Text } from '@radix-ui/themes';

import { SectionLayout } from '~/layouts/SectionLayout';

const HistoryData = [
  {
    year: '2000',
    description: ['Born at Tokyo.'],
  },
];

const History = () => {
  return (
    <SectionLayout title="History" id="history">
      <Flex direction={'column'} gap={'3'}>
        {HistoryData.map((history, index) => (
          <Flex direction={'column'} gap={'1'} key={index}>
            <Text size={'7'}>[ {history.year} ]</Text>
            {history.description.map((description, index) => (
              <Text size={'6'} key={index}>
                - {description}
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
    </SectionLayout>
  );
};

export default History;
