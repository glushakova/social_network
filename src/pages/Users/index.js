import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Loader, Card } from '../../components';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const';

const Users = () => {
  const [users, usersChange] = useState([]);
  const [loading, loadingChange] = useState(false);
  const [error, errorChange] = useState('');

  useEffect(() => {
    loadingChange(true);
    const getUser = async () => {
      try {
        const response = await axios.get(
          'https://serverless-backend-ky9b8rmuq.now.sh/api/users'
        );
        usersChange(response.data);
        loadingChange(false);
      } catch (error) {
        loadingChange(false);
        errorChange(error.message);
      }
    };
    getUser();
  }, []);

  if (!users && !loading) {
    return <div>{`Ошибка: ${error}`}</div>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="page">
          <div className="page-users">
            {users.map((element) => {
              return (
                <Link key={element._id} to={`${ROUTES.USERS}/${element.index}`}>
                  <Card name={element.name} picture={element.picture} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export { Users };
