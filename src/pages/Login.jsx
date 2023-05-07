// import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CSS from '../pages/Home.module.css';

const LogIn = () => {
  const location = useLocation();
  return (
    <div>
      <div className={CSS.LogIn}>
        <div className={CSS.items}>
          <input className={CSS.Email} type="email" />
          <input className={CSS.Password} type="password" />
          <button className={CSS.btn} type="submit">
            Увійти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
