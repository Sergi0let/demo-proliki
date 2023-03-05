import Container from '@/pages/common/Container/Container';
import Title from '@/pages/common/Title/Title';
import Tabs from '../Tabs/Tabs';
import styled from './AlphabetSection.module.scss';

const AlphabetSection = () => {
  return (
    <Container>
      <div className={styled.alphabet}>
        <Title title="Алфавітний покажчик" />
        <Tabs />
      </div>
    </Container>
  );
};

export default AlphabetSection;
