import Banner from '@/src/components/Banner/Banner';
// import FarmGroups from '@/src/components/FarmGroups/FarmGroups';
import AlphabetSection from '@/src/components/AlphabetSection/AlphabetSection';
import CategorySection from '@/src/components/CategorySection/CategorySection';
import NewsBlock from '@/src/components/NewsBlock/NewsBlock';
import FarmGroups from '@/src/components/FarmGroups/FarmGroups';

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
