//сторінка для зареєстрованного користувача
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import styled from '@emotion/styled';


const StyledLink = styled(NavLink)`
  color: lightslategrey;

  &.active {
    color: orange;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink style={{ fontSize: '20px', textDecoration: 'none' }} to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};