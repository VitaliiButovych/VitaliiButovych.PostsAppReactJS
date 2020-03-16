import React, { useState, useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import Posts from './components/Posts';
import Filter from './components/Filter';
import LoadMore from './components/LoadMore';
import Pagination from './components/Pagination';
import useFetch from './hooks/useFetch';
import useFilter from './hooks/useFilter';
import usePosts from './hooks/usePosts';
import { FavoritesProvider, useFavorites } from './hooks/useFavorites';

export default App;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [view, setView] = useState('grid'); // list
  const {search, setSearch, limit, setLimit, order, setOrder} = useFilter();
  const [{isLoading, data, error}] = usePosts(`_page=${currentPage}&_limit=${limit}`);

  return (
    <FavoritesProvider>
      <MainLayout>
        <Filter 
          view={view} 
          search={search} 
          order={order} 
          limit={limit} 
          setView={setView}
          setSearch={setSearch}
          setOrder={setOrder}
          setLimit={setLimit}
        />
        {data && <Posts posts={data} title />}
        <LoadMore />
        <Pagination />
      </MainLayout>
    </FavoritesProvider>
  );
}
