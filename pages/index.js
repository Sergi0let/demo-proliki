import Banner from './components/Banner/Banner';
import FarmGroups from './components/farmGroups/FarmGroups';
import AlphabetSection from './components/AlphabetSection/AlphabetSection';
import NewsBlock from './components/NewsBlock/NewsBlock';
import CategorySection from './components/CategorySection/CategorySection';

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
