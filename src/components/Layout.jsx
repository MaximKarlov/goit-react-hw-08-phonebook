import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../redux/auth/authOperation';
import { authSelectors } from '../redux/auth/authSelector';
import defaultAvatar from './default-avatar.png';
import CSS from './Layout.module.css';

export const Layout = () => {
  const avatar = defaultAvatar;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const userLogged = useSelector(authSelectors.getUserName);

  return (
    <div>
      <ul className={CSS.layout_items}>
        <li className={CSS.layout_item}>
          <NavLink to="/" className={CSS.linked}>
            Home
          </NavLink>
        </li>
        <li className={CSS.layout_item}>
          <NavLink to="/contacts" className={CSS.linked}>
            PHONEBOOK
          </NavLink>
        </li>
        {isLoggedIn ? (
          <div className={CSS.userInfo}>
            <span className={CSS.tmp}>
              Вітаємо вас, {userLogged} <img src={avatar} alt="ava" width="32" className={CSS.avatar} />
            </span>
            <button className={CSS.btn} onClick={() => dispatch(logOutUser())}>
              Вихід
            </button>
          </div>
        ) : (
          <ul className={CSS.regLogItems}>
            <li className={CSS.regLogItem}>
              <NavLink to="/register" className={CSS.linked}>
                Register
              </NavLink>
            </li>
            <li className={CSS.regLogItem}>
              <NavLink to="/login" className={CSS.linked}>
                LogIn
              </NavLink>
            </li>
          </ul>
        )}
      </ul>

      <Suspense fallback={<div>"LOADING..."</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
