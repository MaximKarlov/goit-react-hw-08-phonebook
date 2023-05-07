// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import CSS from '../pages/Home.module.css';

const Register = () => {
  // const location = useLocation();
  return (
    <div>
      <div className={CSS.registration}>
        <div className={CSS.items}>
          <input className={CSS.Name} type="text" />
          <input className={CSS.Email} type="email" />
          <input className={CSS.Password} type="password" />
          <button className={CSS.btn} type="submit">
            Реєстрація
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
