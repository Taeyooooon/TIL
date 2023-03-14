import React from 'react';
import { Link } from 'react-router-dom';
import { useNetwork } from '../../hooks/useNetwork';

const UseNetwork = () => {
  const networkMessage = (networkStatus) => {
    alert(networkStatus ? '온라인입니다' : '오프라인입니다');
  };

  const networkStatus = useNetwork(networkMessage);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>USENETWORK</h1>
      <div>{networkStatus ? 'Online' : 'Offline'}</div>
      <div>네트워크 연결 상태 감지 후 함수 실행</div>
    </div>
  );
};

export default UseNetwork;
