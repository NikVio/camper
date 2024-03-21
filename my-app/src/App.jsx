import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";

const HomePage = lazy(() => import("./Pages/HomePage"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./Pages/FavoritesPage"));
const CampersDetails = lazy(() =>
  import("./components/CampersDetails/CampersDetails")
);
const Features = lazy(() => import("./components/Features/Features"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFound = lazy(() => import("./components/NotFound/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="campers" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="campers/:campersId" element={<CampersDetails />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
