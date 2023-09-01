import type { NextPage } from 'next';

import { Eyecatch } from '~/app/Eyecatch';
import { Skills } from '~/app/Skill';


const TopPage: NextPage = () => {
  return (
    <main>
      <Eyecatch />
      <Skills />
    </main>
  );
};

export default TopPage;
