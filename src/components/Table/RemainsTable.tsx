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
    axios
      .get(`https://195.189.226.96:8000/remains${id}`)
      .then((response) => {
        setRemains(response.data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [id]); // добавили id в зависимости

  return (
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
  );
}
