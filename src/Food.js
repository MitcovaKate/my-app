// hw1: create a component named Food: which can render a food item in menu
// image, name, price, ingredients
// how to render 3 food items?
//what if while rendering we will send an entire food object


  const Food = ({ image, name, price, ingredients }) => {
    return (
      <div className="food">
        <img src={image} width="300" height="200" alt={name} />
        <h3>{name} - {`$${price}`}</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Food;