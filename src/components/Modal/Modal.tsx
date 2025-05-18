import { useState } from 'react';
import css from './Modal.module.css';
import Menu from '../Menu/Menu';
export default function MenuModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className={css.burgerMenu} onClick={handleOpen}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div className={css.modal}>
          <div className={css.modalContent}>
            <Menu />
            <button className={css.closeButton} onClick={handleClose}>
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
