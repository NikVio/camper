import sprite from "../assets/sprite.svg";

export default function HomePage() {
  return (
    <>
      <h1>FavoritesPage</h1>
      <button>
        <svg>
          <use href={`${sprite}#icon-Petrol`} />
        </svg>
      </button>
    </>
  );
}
