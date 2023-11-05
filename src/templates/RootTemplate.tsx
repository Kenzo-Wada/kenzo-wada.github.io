import dynamic from 'next/dynamic';

const Eyecatch = dynamic(() => import('~/sections/Eyecatch'));
const Skills = dynamic(() => import('~/sections/Skill'));
const Tldr = dynamic(() => import('~/sections/TLDR'));
const History = dynamic(() => import('~/sections/History'));

export const MainTemplate = () => {
  return (
    <main>
      <Eyecatch />
      <Tldr />
      <Skills />
      <History />
    </main>
  );
};
