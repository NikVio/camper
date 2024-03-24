export const selectCampersCatalog = (state) => state.advert.items;
export const selectIsLoading = (state) => state.advert.isLoading;
export const selectError = (state) => state.advert.error;
export const selectCurrentPage = (state) => state.advert.page;

export const selectFavoriteCamper = (state) => state.favorite.items;
export const selectErrorFavorite = (state) => state.favorite.error;
export const selectIsLoadingFavorite = (state) => state.favorite.isLoading;
