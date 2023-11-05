import { Box, Flex, Text } from '@radix-ui/themes';

import { SectionLayout } from '~/layouts/SectionLayout';
import * as style from '~/sections/Skill/skill.css';

const skillData = [
  {
    title: 'Language',
    levels: {
      Skilled: [{ name: 'TypeScript' }, { name: 'JavaScript' }],
      Able: [{ name: 'Go' }, { name: 'Python' }],
      Interested: [{ name: 'Rust' }, { name: 'Dart' }],
    },
  },
  {
    title: 'Frontend Framework',
    levels: {
      Skilled: [{ name: 'React.js' }, { name: 'Next.js' }],
      Able: [{ name: 'Astro.js' }, { name: 'Gatsby' }],
      Interested: [{ name: 'Solid.js' }, { name: 'Svelte' }, { name: 'Remix' }, { name: 'qwik' }],
    },
  },
  {
    title: 'Runtime',
    levels: {
      Skilled: [{ name: 'Node.js' }],
      Able: [{ name: 'bun' }],
      Interested: [{ name: 'Deno' }],
    },
  },
];

const Skills = () => {
  return (
    <SectionLayout title="Skills" id="skills">
      <Flex gap={'9'} justify={'between'} wrap={'wrap'}>
        {skillData.map((category, categoryIndex) => (
          <Flex direction="column" gap="3" key={categoryIndex}>
            <Text weight="bold" size="7">
              [ {category.title} ]
            </Text>
            <Flex direction="column" gap="3">
              {Object.entries(category.levels).map(([level, skills], levelIndex) => (
                <Flex direction="column" gap="1" key={levelIndex}>
                  <Box>
                    <Text size={'7'} weight={'bold'} className={style.underlinedText}>
                      - {level}
                    </Text>
                  </Box>
                  <Flex gap="6" wrap="wrap">
                    {skills.map((skill, skillIndex) => (
                      <Flex key={skillIndex} align="center" gap="3">
                        <Text size="6">{skill.name}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </SectionLayout>
  );
};

export default Skills;
