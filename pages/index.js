import Banner from '@/src/components/Banner/Banner';
import AlphabetSection from '@/src/components/AlphabetSection/AlphabetSection';
import CategorySection from '@/src/components/CategorySection/CategorySection';
import NewsBlock from '@/src/components/NewsBlock/NewsBlock';
import FarmGroups from '@/src/components/FarmGroups';

export default function Home() {
  return (
    <>
      <Banner />
      <FarmGroups />
      <AlphabetSection />
      <NewsBlock />
      <CategorySection />
    </>
  );
}
