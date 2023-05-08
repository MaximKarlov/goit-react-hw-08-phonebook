import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { authSelectors } from '../redux/auth/authSelector';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentUser } from '../redux/auth/authOperation';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(authSelectors.getLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // const userLogged = useSelector(authSelectors.getUserName);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
