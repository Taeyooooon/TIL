import React from 'react';
import { Link } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

const UseAxios = () => {
  const postData = { id: 123, name: 'taeyoon' };

  const { loading, error, data, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
    method: 'post', // 다른 메서드는 이런식으로 추가 get은 생략가능
    data: postData, // post 데이터 get일 경우 생략가능
  });

  console.log(loading, error, data); // axios 결과

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
