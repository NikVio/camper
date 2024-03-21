import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { GlobalStyle } from "../../GlobalStyle";
//import { Header, HeaderList, StyledLink } from "./AppLayout.styled";

export const AppLayout = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading page...</p>}>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/campers">Catalog</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <GlobalStyle />
    </div>
  );
};
