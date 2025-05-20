import { useEffect, useState } from 'react';
import axios from 'axios';
import css from './TableWithSearch.module.css';
interface Client {
  id: string;
  client: string;
}
interface ClientTableProps {
  userId: string | null;
}
export default function ClientTable({ userId }: ClientTableProps) {
  const [clients, setClients] = useState<Client[]>([]);
  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    // const userId = '548019148';
    axios
      .get(`https://taurus.pp.ua/get_user${userId}`)
      .then((response) => {
        setUser(response.data[0].name);
        console.log('user', response.data[0].name);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [userId]);
  useEffect(() => {
    axios
      .get(`https://taurus.pp.ua/clients${user}`)
      .then((response) => {
        setClients(response.data);
        console.log('clients', response.data);
      })
      .catch((error) => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [user]);
  return (
    <div>
      <h1>Клиенты</h1>
      <table className={css.table}>
        <thead>
          <tr>
            <th>Контрагент</th>
            {/* <th>Телефон</th>
                        <th>Почта</th> */}
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
