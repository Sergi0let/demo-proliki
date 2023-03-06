import AlphabetSection from '@/src/components/AlphabetSection/AlphabetSection';
import Banner from '@/src/components/Banner/Banner';
import CategorySection from '@/src/components/CategorySection/CategorySection';
import FarmGroups from '@/src/components/farmGroups/FarmGroups';
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
