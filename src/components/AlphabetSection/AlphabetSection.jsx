import Container from '@/src/common/Container/Container';
import { H2Title } from '@/src/common/Title/Title';
import Tabs from '../Tabs/Tabs';

import styled from './AlphabetSection.module.scss';

const AlphabetSection = () => {
  return (
    <Container>
      <div className={styled.alphabet}>
        <H2Title title="Алфавітний покажчик" />
        <Tabs />
      </div>
    </Container>
  );
};

export default AlphabetSection;
