//import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogCampers } from "../../components/CatalogCampers/CatalogCampers";
import { pageCamper } from "../../Redux/operations";
import {
  selectCampersCatalog,
  selectCurrentPage,
  selectError,
  selectIsLoading,
} from "../../Redux/selectors";
import { BtnLoadMore, ButtonBox, CatalogList } from "./CatalogPage.styled";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const advert = useSelector(selectCampersCatalog);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    if (currentPage === 0) {
      dispatch(pageCamper({ page: currentPage + 1 }));
    }
  }, [currentPage]);

  return (
    <ButtonBox>
      <CatalogList>
        {advert.map((item) => (
          <li key={item._id}>
            <CatalogCampers item={item} />
          </li>
        ))}
      </CatalogList>
      {currentPage <= 3 && (
        <BtnLoadMore
          onClick={() => dispatch(pageCamper({ page: currentPage + 1 }))}
        >
          Load More
        </BtnLoadMore>
      )}
    </ButtonBox>
  );
}
