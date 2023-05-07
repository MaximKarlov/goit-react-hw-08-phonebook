// import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import CSS from '../pages/Home.module.css';

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <span>Творіння Макса Карлова)))</span>
      <p>
        Для роботи з контактами потрібно
        <Link to="/register" state={{ from: location }} className={CSS.linked}>
          зареєструватися
        </Link>
        або
        <NavLink to="/LogIn" className={CSS.linked}>
          увійти
        </NavLink>
        в систему
      </p>
    </div>
  );
};

export default Home;
