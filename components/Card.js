import Link from 'next/link';


const Card = ({ hit }) => {
  const { recipe } = hit;
  console.log(hit);
  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g, // This regex matches any word character followed by zero or more non-whitespace characters.
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={recipe.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toTitleCase(recipe.label)}</h2>

        <div className="bg-accent p-8 rounded-xl">
          {recipe.ingredients.map((ingredient) => {
            return (
              <p className="text-white font-plain">
                {ingredient.quantity} {ingredient.measure} of {ingredient.food}
              </p>
            );
          })}
        </div>
        <p></p>
        <div className="card-actions">
          <Link href={recipe.url}>
            <button className="btn btn-primary">Check full recipee</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
