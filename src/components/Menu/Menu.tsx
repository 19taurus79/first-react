import css from './Menu.module.css';
interface MenuProps {
  remainsIsOpen: () => void;
  clientIsOpen: () => void;
  handleClose: () => void;
}
export default function Menu({
  remainsIsOpen,
  clientIsOpen,
  handleClose,
}: MenuProps) {
  return (
    <nav>
      <ul className={css.menu}>
        <li
          className={css.menuItem}
          onClick={() => {
            remainsIsOpen();
            handleClose();
          }}
        >
          Залишки
        </li>
        <li
          className={css.menuItem}
          onClick={() => {
            clientIsOpen();
            handleClose();
          }}
        >
          Заявки
        </li>
        {/* <li className={css.menuItem}>Поставщики</li>
        <li className={css.menuItem}>Клиенты</li>
        <li className={css.menuItem}>Отчёты</li> */}
      </ul>
    </nav>
  );
}
