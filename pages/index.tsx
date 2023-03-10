import Search from '@/components/blocks/search/search';
import SearchResults from '@/components/blocks/search-results/search-results';
import { useEffect } from 'react';
import { initWishList } from '@/store/wish-list-slice/wish-list-slice';
import { useAppDispatch } from '@/hooks/store-hooks';

export default function Home() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(initWishList());
  });

  return (
    <>
      <Search />
      <SearchResults />
    </>
  );
}
