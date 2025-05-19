import css from './Menu.module.css';

export default function Menu() {
  return (
    <nav>
      <ul className={css.menu}>
        <li className={css.menuItem}>Залишки</li>
        <li className={css.menuItem}>Заявки</li>
        <li className={css.menuItem}>Поставщики</li>
        <li className={css.menuItem}>Клиенты</li>
        <li className={css.menuItem}>Отчёты</li>
      </ul>
    </nav>
  );
}
