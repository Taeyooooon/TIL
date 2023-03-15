import React from 'react';
import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

const UseAxios = () => {
  const { loading, error, data, refetch } = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' });

  console.log(loading, error, data);
  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USEAXIOS</h1>
      <h3>Axios Status : {data && data.status}</h3>
      <h4>{loading && 'Loading...'}</h4>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default UseAxios;
