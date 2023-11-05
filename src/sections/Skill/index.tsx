import { Box, Container, Flex, Text } from '@radix-ui/themes';

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
    <Flex direction="column" gap="6" mt="9">
      <Container id="skills">
        <Flex direction="column" gap="6">
          <Text weight="bold" size="9">
            # Skills.
          </Text>
          <Flex gap={'9'} justify={'between'} wrap={'wrap'}>
            {skillData.map((category, categoryIndex) => (
              <Flex direction="column" gap="3" key={categoryIndex}>
                <Text weight="bold" size="8">
                  [{category.title}]
                </Text>
                {Object.entries(category.levels).map(([level, skills], levelIndex) => (
                  <Flex direction="column" gap="3" key={levelIndex}>
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
            ))}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Skills;
