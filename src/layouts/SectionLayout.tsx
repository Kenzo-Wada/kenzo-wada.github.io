import { Container, Flex, Text } from '@radix-ui/themes';

interface Props {
  children: React.ReactNode;
  title: string;
  id: string;
}

export const SectionLayout = (props: Props) => {
  const { children, title, id } = props;

  return (
    <section>
      <Flex direction="column" gap="6" mt="9">
        <Container id={id}>
          <Flex direction="column" gap="6">
            <Text weight="bold" size="8">
              # {title}.
            </Text>
            {children}
          </Flex>
        </Container>
      </Flex>
    </section>
  );
};
