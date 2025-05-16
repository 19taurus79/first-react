import css from './SearchProduct.module.css';
import { useState } from 'react';

export default function SearchProduct() {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product..."
        className={css.input}
      />
    </div>
  );
}
