import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { styled } from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  @media (max-width: 800px) {
    grid-column: 1 / -1;
    overflow: visible;
    padding: 2rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <StyledAppLayout>
      <Header
        sidebar={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <Sidebar
        sidebar={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
