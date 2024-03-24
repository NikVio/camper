import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
import { Header, HeaderList, StyledLink } from "./AppLayout.styled";

export const AppLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading page...</p>}>
        <Header>
          <nav>
            <HeaderList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/campers">Catalog</StyledLink>
              </li>
              <li>
                <StyledLink to="/favorites">Favorites</StyledLink>
              </li>
            </HeaderList>
          </nav>
        </Header>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
