import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import CSS from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={CSS.layout_items}>
        <li className={CSS.layout_item}>
          <NavLink to="/" className={CSS.linked}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={CSS.linked}>
            PHONEBOOK
          </NavLink>
        </li>

        <ul className={CSS.regLogItems}>
          <li className={CSS.regLogItem}>
            <NavLink to="/Register" className={CSS.linked}>
              Register
            </NavLink>
          </li>
          <li className={CSS.regLogItem}>
            <NavLink to="/LogIn" className={CSS.linked}>
              LogIn
            </NavLink>
          </li>
        </ul>
      </ul>
      <Suspense fallback={<div>"LOADING..."</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
