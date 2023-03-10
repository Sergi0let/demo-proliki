import drugItems from '@/src/common/data/drugItems';
import DrugBlock from '@/src/components/DrugItem/DrugBlock';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DrugItem = () => {
  const router = useRouter();
  const { search } = router.query;
  const [drug, setDrug] = useState(null);
  const [allDrug, setAllDrug] = useState(null);
  console.log('search', search);
  console.log('drug', drug);

  useEffect(() => {
    const searchDrug = drugItems.filter(
      (drug) =>
        drug.name.toLowerCase().includes(search) ||
        drug.characteristics.producer.toLowerCase().includes(search)
    );
    setDrug(searchDrug);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      const response = drugItems;

      const currentItem = response.filter(
        (item) => item.name.toLowerCase().includes(search) && item
      );

      setDrug(currentItem);
      setAllDrug(response);
    };
    fetchData();
  }, [search]);

  if (!drug) return <div>loading...</div>;

  return <DrugBlock data={drug} allDrug={allDrug} />;
};

export default DrugItem;
