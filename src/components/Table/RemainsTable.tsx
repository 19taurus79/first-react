import css from './TableWithSearch.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
interface Remains {
  nomenclature: string;
  buh: number;
  nomenclature_series: string;
  skl: string;
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
  // console.log('id', id);
  // console.log('remains', remains);
  return (
    <div className={css.productTable}>
      <table className={css.table}>
        <thead>
          <tr>
            <th colSpan={3}>Номенклатура</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3} className={css.remainsNomenclature}>
              {remains[0]?.nomenclature ?? ''}
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Партия</th>
            <th>Бух</th>
            <th>Склад</th>
          </tr>
        </thead>
        <tbody>
          {remains.map((item, index) => (
            <tr key={index}>
              <td className={css.remainsData}>{item.nomenclature_series}</td>
              <td className={css.remainsData}>{item.buh}</td>

              <td className={css.remainsData}>{item.skl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
