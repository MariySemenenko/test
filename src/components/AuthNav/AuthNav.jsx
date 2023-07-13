import { NavLink } from 'react-router-dom';
import { Div } from './AuthNav.styled'
import styled from '@emotion/styled';


const StyledLink = styled(NavLink)`
  color: lightslategrey;

  &.active {
    color: orange;
  }
`;

export const AuthNav = () => {
  return (
    <Div>

      <StyledLink style={{ marginRight: '20px', textDecoration: 'none' }} to="/register">
        Register
      </StyledLink>
      <StyledLink style={{ textDecoration: 'none' }} to="/login">
        Log In
      </StyledLink>
    </Div>
  );
};
