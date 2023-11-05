import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Eyecatch = dynamic(() => import('~/sections/Eyecatch'));
const Skills = dynamic(() => import('~/sections/Skill'));

const TopPage: NextPage = () => {
  return (
    <main>
      <Eyecatch />
      <Skills />
    </main>
  );
};

export default TopPage;
