import { Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';

import { SectionLayout } from '~/layouts/SectionLayout';

const HistoryData = [
  {
    year: '2000',
    description: ['Born at Tokyo.'],
  },
  {
    year: '2007-2008',
    description: ['Lived in Canberra, Australia.'],
  },
  {
    year: '2019',
    description: ['Become a student of Tokyo Metropolitan Univ.'],
    link: 'Tokyo Metropolitan Univ.',
    url: 'https://www.tmu.ac.jp/english/index.html',
  },
  {
    year: '2020',
    description: ['Became a Web Developer. Started to create websites using React.'],
  },
  {
    year: '2021',
    description: [
      'Joined Updata, Inc. as a Intern enginner.',
      'Created a SaaS called Datamage with React, vite.js, and GraphQL.',
      'Also Visualized the data using Metabase using SQL of BigQuery.',
    ],
    link: 'Updata, Inc.',
    url: 'https://updata.tech/',
  },
  {
    year: '2022',
    description: ['Joined Caddi, Inc. as a Freelance Engineer.', 'Created internal systems using Nest.js, Integromat, airtable.'],
    link: 'Caddi, Inc.',
    url: 'https://caddi.com/',
  },
  {
    year: '2022',
    description: [
      'Joined Catallaxy. Inc. as a Full-Stack Engineer.',
      'Created a SaaS called Mitsuri with Next.js, TypeORM, and frurio',
    ],
    link: 'Catallaxy, Inc.',
    url: 'https://catallaxy.me/',
  },
  {
    year: '2023 - now',
    description: ['Working at LY Corp. as a Frontend Engineer.', ['Creating Yahoo! Auction using Next.js and Nest.js']],
    link: 'LY Corp.',
    url: 'https://www.lycorp.co.jp/ja/',
  },
];

const History = () => {
  return (
    <SectionLayout title="History" id="history">
      <Flex direction={'column'} gap={'6'}>
        {HistoryData.map((history, index) => (
          <Flex direction={'column'} gap={'1'} key={index}>
            <>
              <Text size={'7'} weight={'bold'}>
                [ {history.year} ]
              </Text>
              {history.description.map((description, index) => (
                <Text size={'6'} key={index}>
                  - {description}
                </Text>
              ))}
              {history.link && (
                <Link href={history.url} target="_blank" rel="noopener noreferrer">
                  {history.link}
                </Link>
              )}
            </>
          </Flex>
        ))}
      </Flex>
    </SectionLayout>
  );
};

export default History;
