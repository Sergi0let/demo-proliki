import NoMatches from '@/src/components/NoMatches';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  });

  return <NoMatches />;
};
export default Error;
