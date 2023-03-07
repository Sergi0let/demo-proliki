import drugItems from '@/src/common/data/drugItems';
import DrugBlock from '@/src/components/DrugItem/DrugBlock';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const DrugItem = () => {
  const router = useRouter();
  const { search } = router.query;
  const [drug, setDrug] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = drugItems;

      const currentItem = response.filter(
        (item) => item.name.toLowerCase().includes(search) && item
      );

      setDrug(currentItem);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return <DrugBlock data={drug} />;
};

export default DrugItem;
