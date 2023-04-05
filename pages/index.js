import Banner from '@/src/components/Banner/Banner';
import FarmGroups from '@/src/components/FarmGroups/FarmGroups.jsx';
import AlphabetSection from '@/src/components/AlphabetSection/AlphabetSection';
import CategorySection from '@/src/components/CategorySection/CategorySection';
import NewsBlock from '@/src/components/NewsBlock/NewsBlock';

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
