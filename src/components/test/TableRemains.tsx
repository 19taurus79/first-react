import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './TableRemains.module.css';

interface Product {
  id: string;
  nomenclature: string;
}
function onClickProduct(id: string) {
  console.log('Product ID:', id);
}
export default function TableProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/products').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td onClick={() => onClickProduct(product.id)}>
              {product.nomenclature}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
