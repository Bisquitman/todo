import {HeaderBlock, HeaderContainer, HeaderNavLink, HeaderThemeButton, HeaderThemeContainer} from "./Header.styled";
import {toggleThemeAction} from "../../features/themeListSlice";
import {useDispatch} from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderNavLink to="/">Home</HeaderNavLink>
        <HeaderNavLink to="/list">List</HeaderNavLink>
        <HeaderThemeContainer>
          <HeaderThemeButton
            onClick={() => dispatch(toggleThemeAction())}></HeaderThemeButton>
        </HeaderThemeContainer>
        {/*<div className="toggleButton">*/}
        {/*  <button>toggle</button>*/}
        {/*</div>*/}
      </HeaderContainer>
    </HeaderBlock>
  );
}
