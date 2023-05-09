import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CSS from '../pages/Home.module.css';
import Button from '@mui/material/Button';
import { registerUser } from '../redux/auth/authOperation';

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
          <Button variant="outlined" className={CSS.home_btn} type="submit">
            Реєстрація
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Register;
