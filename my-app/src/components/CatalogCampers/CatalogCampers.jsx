export const CatalogCampers = ({
  item: { photo, name, price, rating, location, description },
}) => {
  return (
    <div>
      <div>
        <img src={photo} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{rating}</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
