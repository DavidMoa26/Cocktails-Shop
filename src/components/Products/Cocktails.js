import Card from '../UI/Card';
import Product from './Product/Product';
import classes from './Cocktails.module.css';
import SpicesGarden from '../../assets/cocktails/SpicesGarden.png'
import CitrusBlossom from '../../assets/cocktails/CitrusBlossom.png'
import EspressoMartini from '../../assets/cocktails/EspressoMartini.png'
import SpicyMargarita from '../../assets/cocktails/SpicyMargarita.png'
import AloahCocktail from '../../assets/cocktails/AloahCocktail.png'
import SmokedHoney from '../../assets/cocktails/SmokedHoney.png'


const COCKTAILS = [
  {
    id: 'c1',
    name: 'The Spices Garden',
    description: "Cocktail based on premium gin, fresh lime juice and homemade basil syrup",
    price: 14.99,
    image: SpicesGarden
  },
  {
    id: 'c2',
    name: 'Citrus Blossom',
    description: "Cocktail based on premium vodka, Campari, fresh pineapple and citrus fruit mix",
    price: 16.5,
    image: CitrusBlossom
  },
  {
    id: 'c3',
    name: 'Spicy Margarita',
    description: "Cocktail based on aged tequila, orange liqueur, fresh passion fruit juice, fresh lime and hot chili pepper",
    price: 17.99,
    image: SpicyMargarita
  },
  {
    id: 'c4',
    name: 'Espresso Martini',
    description: "Cocktail based on premium vodka flavored with cardamom, coffee liqueur and fresh espresso",
    price: 13.99,
    image: EspressoMartini
  },
  {
    id: 'c5',
    name: 'Aloah Cocktail ',
    description: "Tropical cocktail combining aged white rum and spiced rum with coconut liqueur and tropical fruit mix",
    price: 18.99,
    image: AloahCocktail
  },
  {
    id: 'c6',
    name: 'Smoked Honey',
    description: "A cocktail based on smoked single malt whiskey with fresh lime juice, honey and ginger syrup",
    price: 17.99,
    image: SmokedHoney
  },

];

const Cocktails = () => {
  const cocktailsList = COCKTAILS.map((meal) => (
    <Product
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{cocktailsList}</ul>
      </Card>
    </section>
  );
};

export default Cocktails;
