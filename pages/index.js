import Banner from '@/src/components/Banner/Banner';
import AlphabetSection from '@/src/components/AlphabetSection/AlphabetSection';
import CategorySection from '@/src/components/CategorySection/CategorySection';
import NewsBlock from '@/src/components/NewsBlock/NewsBlock';
import FarmBlock from '@/src/components/FarmBlock';

export default function Home() {
  return (
    <>
      <Banner />
      <FarmBlock />
      <AlphabetSection />

      <NewsBlock />
      <CategorySection />
    </>
  );
}
