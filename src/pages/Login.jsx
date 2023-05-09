import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import CSS from '../pages/Home.module.css';
import { logInUser } from '../redux/auth/authOperation';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

  const loggInUser = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={loggInUser}>
      <div className={CSS.registration}>
        <div className={CSS.items}>
          <h2>Вхід</h2>
          <label>
            Пошта
            <input name="email" value={email} className={CSS.Email} type="email" onChange={handleChange} />
          </label>
          <label>
            Пароль
            <input name="password" value={password} className={CSS.Password} type="password" onChange={handleChange} />
          </label>
          <Button variant="outlined" startIcon={<LoginIcon />} className={CSS.home_btn} type="submit">
            Вхід
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Login;
