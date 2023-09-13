import { styled } from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { HiBars3 } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 800px) {
    grid-column: 1 / -1;
  }
`;

const StyledSidebarToggle = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    margin-right: auto;
  }
`;

function Header({ sidebar, onToggle }) {
  return (
    <StyledHeader>
      <StyledSidebarToggle>
        <ButtonIcon>
          <HiBars3 onClick={onToggle} size={32} />
        </ButtonIcon>
      </StyledSidebarToggle>
      <UserAvatar />

      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
