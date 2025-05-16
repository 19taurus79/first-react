import css from './TableWithSearch.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Remains {
  nomenclature: string;
  buh: number;
  nomenclature_series: string;
}
export default function RemainsTable({ id }: { id: string }) {
  const [remains, setRemains] = useState<Remains[]>([]);

  useEffect(() => {
    if (!id) return; // не делаем запрос, если id пустой
    axios
      .get(`https://taurus.pp.ua/remains${id}`)
      .then((response) => {
        setRemains(response.data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [id]);
  console.log('id', id);
  console.log('remains', remains);
  return (
    <div className={css.productTable}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Номенклатура</th>
            <th>Остаток</th>
            <th>Партия</th>
          </tr>
        </thead>
        <tbody>
          {remains.map((item, index) => (
            <tr key={index}>
              <td>{item.nomenclature}</td>
              <td>{item.buh}</td>
              <td>{item.nomenclature_series}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
