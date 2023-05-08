import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import CSS from '../pages/Home.module.css';
import { registerUser } from '../redux/authOperation';

const Register = () => {
  const dispatch = useDispatch();
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name': {
        setNickName(value);
        break;
      }
      case 'email': {
        setEmail(value);
        break;
      }
      case 'password': {
        setPassword(value);
        break;
      }
      default: {
        return value;
      }
    }
  };
  // const location = useLocation();

  const regUser = e => {
    e.preventDefault();
    dispatch(registerUser({ nickName, email, password }));
    setNickName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={regUser}>
      <div className={CSS.registration}>
        <div className={CSS.items}>
          <h2>Реєстрація</h2>
          <label>
            Имя
            <input name="name" value={nickName} className={CSS.Name} type="text" onChange={handleChange} />
          </label>
          <label>
            Пошта
            <input name="email" value={email} className={CSS.Email} type="email" onChange={handleChange} />
          </label>
          <label>
            Пароль
            <input name="password" value={password} className={CSS.Password} type="password" onChange={handleChange} />
          </label>
          <button className={CSS.home_btn} type="submit">
            Реєстрація
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
