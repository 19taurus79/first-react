// src/components/App.tsx

// import Alert from './test/Alert';
// import BookList from './test/Book';
// import Button from './test/Button';
// import MailBox from './test/MailBox';
// import Product from './test/Product';
// import { useState } from 'react';
// import TableProducts from './test/TableRemains';
// import SearchProduct from './test/SearchProduct';
// import Menu from './Menu/Menu';
import axios from 'axios';
import MenuModal from './Modal/Modal';
import TableWithSearch from './Table/TableWithSearch';
// import React from 'react';
import { useEffect, useState } from 'react';
import ClientTable from './Table/ClientTable';
export default function App() {
  const ALLOWED_IDS = [123456789, 987654321, 548019148]; // замените на нужные Telegram ID

  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Проверяем наличие Telegram WebApp SDK
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
      if (userId === undefined) {
        setIsAllowed(true);
      } else if (userId && ALLOWED_IDS.includes(userId)) {
        setIsAllowed(true);
        const userName = axios
          .get(`http://127.0.0.1:8000/get_user${userId}`)
          .then((response) => response.data.name);
        setUser(userId.toString());
      } else {
        setIsAllowed(false);
      }
    } else {
      setIsAllowed(false);
    }
  }, [ALLOWED_IDS]);

  if (isAllowed === null) return <div>Загрузка...</div>;
  if (!isAllowed) return <div>Доступ запрещён</div>;
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  //   console.log(clicks);
  // };
  return (
    <div className="container">
      <MenuModal />
      {/* <Menu /> */}
      <TableWithSearch userId={user} />
      <ClientTable userId={user} />
    </div>
  );
}
