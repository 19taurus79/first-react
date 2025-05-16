import css from './SearchField.module.css';
interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}
export function SearchField({ value, onChange }: SearchFieldProps) {
  return (
    <div className={css.stickySearch}>
      <input
        type="text"
        placeholder="Поиск..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css.input}
      />
    </div>
  );
}
