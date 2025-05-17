// src/components/App.tsx

// import Alert from './test/Alert';
// import BookList from './test/Book';
// import Button from './test/Button';
// import MailBox from './test/MailBox';
// import Product from './test/Product';
// import { useState } from 'react';
// import TableProducts from './test/TableRemains';
// import SearchProduct from './test/SearchProduct';
import TableWithSearch from './Table/TableWithSearch';
// import React from 'react';
import { useEffect, useState } from 'react';
export default function App() {
  const ALLOWED_IDS = [123456789, 987654321, 548019148]; // замените на нужные Telegram ID

  const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

  useEffect(() => {
    // Проверяем наличие Telegram WebApp SDK
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
      if (userId && ALLOWED_IDS.includes(userId)) {
        setIsAllowed(true);
      } else {
        setIsAllowed(false);
      }
    } else {
      setIsAllowed(false);
    }
  }, []);

  if (isAllowed === null) return <div>Загрузка...</div>;
  if (!isAllowed) return <div>Доступ запрещён</div>;
  // const [clicks, setClicks] = useState(0);
  // const handleClick = () => {
  //   setClicks(clicks + 1);
  //   console.log(clicks);
  // };
  return (
    <div className="container">
      {/* <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={100}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <MailBox userName="John" messages={['1', '2', '3', '4', '5']} />
      <BookList />
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <button onClick={handleClick}>Current: {clicks}</button>
      {/* <button onClick={handleClick}>First button</button> */}
      {/* <button onClick={(event) => console.log(event)}>Second button</button> */}
      {/* <SearchProduct /> */}
      {/* <TableProducts /> */}
      <TableWithSearch />
    </div>
  );
}
