// стану авторизації користувача

import { useSelector } from 'react-redux';
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/auth/selectors';

//дістаю дані з селектора
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);//AppBar
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
// console.log(user, 'qwe')
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
