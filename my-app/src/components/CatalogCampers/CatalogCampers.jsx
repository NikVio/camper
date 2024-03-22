export const CatalogCampers = ({
  item: { gallery, name, price, rating, location, description },
}) => {
  return (
    <div>
      <div>
        <img src={gallery} alt={name} />
      </div>
      <div>
        <li>
          <h3>{name}</h3>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{location}</p>
          <p>{description}</p>
        </li>
      </div>
    </div>
  );
};
