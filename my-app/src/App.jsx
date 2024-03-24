import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";

const HomePage = lazy(() => import("./Pages/HomePage"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage"));
const NotFound = lazy(() => import("./components/NotFound/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="campers" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
