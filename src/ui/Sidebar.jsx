import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { HiXMark } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledSidebar = styled.aside`
  color: #000000;
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    transition: all 0.5s ease-in-out;
    height: 100vh;
    transform: ${(props) =>
      props.sidebar ? "translateX(0%)" : "translateX(-100%)"};
  }
`;

const StyledIconDiv = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
    position: absolute;
    top: 1em;
    left: 3em;
  }
  & svg {
    cursor: pointer;
    color: var(--color-brand-600);
  }
`;

function Sidebar({ sidebar, onToggle }) {
  console.log(sidebar);
  return (
    <StyledSidebar sidebar={sidebar ? 1 : 0}>
      <StyledIconDiv>
        <ButtonIcon onClick={() => onToggle()}>
          <HiXMark size={32} />
        </ButtonIcon>
      </StyledIconDiv>

      <Logo />
      <MainNav />

      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
