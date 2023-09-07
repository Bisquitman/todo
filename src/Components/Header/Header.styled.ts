import styled from "styled-components";
import {NavLink} from 'react-router-dom'

export const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  z-index: 2;
  -webkit-transition: background-color 0.2s;-moz-transition: background-color 0.2s;-ms-transition: background-color 0.2s;-o-transition: background-color 0.2s;transition: background-color 0.2s;
`;

export const HeaderContainer = styled.div`
  position: relative;
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

export const HeaderThemeContainer = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeaderThemeButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  padding: 0;
  background-image: url(${({theme}) => theme.image});
  background-size: cover;
  cursor: pointer;
`;