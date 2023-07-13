 import { useEffect, lazy } from 'react';//lazy для завантаження компонентів лише при потребі
 import { useDispatch } from 'react-redux';
 import { Route, Routes } from 'react-router-dom';
 import { Layout } from '../components/Layout/Layout';
import { PrivateRoute } from '../components/PrivateRoute';// перенаправляє користувача на вказаний маршрут, якщо він не авторизований
 import { RestrictedRoute } from './RestrictedRoute';//перенаправляє користувача на вказаний маршрут, якщо він вже авторизований
 import { refreshUser } from 'redux/auth/operations';
 import { useAuth } from 'hooks/useAuth';
//import HomePage from '../pages/HomePages'


const HomePage = lazy(() => import('../pages/HomePages'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

//викликаю refreshUser який оновлює дані користувача
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};


