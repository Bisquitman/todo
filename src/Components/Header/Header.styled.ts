import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #4682b4;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -ms-transition: color 0.3s;
  -o-transition: color 0.3s;
  transition: color 0.3s;

  &.active {
    color: #ffffff33;
  }
`;

