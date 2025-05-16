import css from './TableWithSearch.module.css';
import type { Product } from '../Types/types';
export function DataTable({
  data,
  onClick,
}: {
  data: Product[];
  onClick: (id: string) => void;
}) {
  return (
    <div className={css.productTable}>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Номенклатура</th>
            {/* <th>Описание</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item: Product) => (
            <tr key={item.id}>
              <td onClick={() => onClick(item.id)}>{item.nomenclature}</td>
              {/* <td>{item.description}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
