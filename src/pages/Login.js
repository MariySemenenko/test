import { Helmet} from 'react-helmet-async';// для додавання метатегу title 
import { LoginForm } from 'components/loginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
}
