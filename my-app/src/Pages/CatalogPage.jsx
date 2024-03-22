//import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogCampers } from "../components/CatalogCampers/CatalogCampers";
import { fetchCampers } from "../Redux/operations";
import {
  selectCampersCatalog,
  selectError,
  selectIsLoading,
} from "../Redux/selectors";

export default function CatalogPage() {
  //const [catalogCampers, setCatalogCampers] = useState([]);

  const dispatch = useDispatch();
  const advert = useSelector(selectCampersCatalog);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log(advert);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <ul>
      {advert.map((item) => (
        <li key={item._id}>
          <CatalogCampers item={item} />
        </li>
      ))}
    </ul>
  );
}
