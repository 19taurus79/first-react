import axios from 'axios';
import { useEffect, useState } from 'react';
import { SearchField } from './SearchField';
import { DataTable } from './DataTable';
import type { Product } from '../Types/types';
import RemainsTable from './RemainsTable';

export default function TableWithSearch() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [remains, setRemains] = useState('');

  useEffect(() => {
    axios
      .get('https://taurus.pp.ua/products')
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, []);
  const onProductClick = (id: string) => {
    setRemains(id);
  };
  const filtered = product.filter((item: Product) =>
    item.nomenclature.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchField value={search} onChange={setSearch} />
      <DataTable data={search ? filtered : product} onClick={onProductClick} />
      <RemainsTable id={remains} />
    </>
  );
}
