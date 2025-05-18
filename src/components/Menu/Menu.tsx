import css from './Menu.module.css';

export default function Menu() {
  return (
    <nav>
      <ul className={css.menu}>
        <li className={css.menuItem}>Главная</li>
        <li className={css.menuItem}>Товары</li>
        <li className={css.menuItem}>Поставщики</li>
        <li className={css.menuItem}>Клиенты</li>
        <li className={css.menuItem}>Отчёты</li>
      </ul>
    </nav>
  );
}
