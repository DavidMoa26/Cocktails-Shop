import Card from '../UI/Card';
import Product from './Product/Product';
import classes from './Packages.module.css';
import SpicesGardenPackage3 from '../../assets/packages/TheSpicesGardenPackage3.png'
import SpicesGardenPackage2 from '../../assets/packages/TheSpicesGardenPackage2.png'
import SpicyMargaritaPackage3 from '../../assets/packages/SpicyMargaritaPackage3.png'
import SpicyMargaritaPackage2 from '../../assets/packages/SpicyMargaritaPackage2.png'
import AloahCocktailPackage3 from '../../assets/packages/AloahCocktailPackage3.png'
import AloahCocktailPackage2 from '../../assets/packages/AloahCocktailPackage2.png'
import CitrusBlossomPackage3 from '../../assets/packages/CitrusBlossomPackage3.png'
import CitrusBlossomPackage2 from '../../assets/packages/CitrusBlossomPackage2.png'




const PACKAGES = [
    {
        id: 'p1',
        name: 'The Spices Garden',
        description: "3 bottled cocktails of The Spices Garden at a special price",
        price: 38.99,
        image: SpicesGardenPackage3
    },
    {
        id: 'p2',
        name: 'The Spices Garden',
        description: "2 bottled cocktails of The Spices Garden at a special price",
        price: 26.99,
        image: SpicesGardenPackage2
    },
    {
        id: 'p3',
        name: 'Spicy Margarita',
        description: "3 bottled cocktails of Spicy Margarita at a special price",
        price: 45.99,
        image: SpicyMargaritaPackage3
    },
    {
        id: 'p4',
        name: 'Spicy Margarita',
        description: "2 bottled cocktails of Spicy Margarita at a special price",
        price: 29.99,
        image: SpicyMargaritaPackage2
    },
    {
        id: 'p5',
        name: 'Citrus Blossom',
        description: "3 bottled cocktails of Citrus Blossom at a special price",
        price: 43.99,
        image: CitrusBlossomPackage3
    },
    {
        id: 'p6',
        name: 'Citrus Blossom',
        description: "2 bottled cocktails of Citrus Blossom at a special price",
        price: 25.99,
        image: CitrusBlossomPackage2
    },
    {
        id: 'p7',
        name: 'Aloah Cocktail',
        description: "2 bottled cocktails of Aloah Cocktail at a special price",
        price: 33.99,
        image: AloahCocktailPackage2
    },
    {
        id: 'p8',
        name: 'Aloah Cocktail',
        description: "3 bottled cocktails of Aloah Cocktail at a special price",
        price: 49.99,
        image: AloahCocktailPackage3
    },
];

const Packages = () => {
    const packagesList = PACKAGES.map((meal) => (
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
                <ul>{packagesList}</ul>
            </Card>
        </section>
    );
};

export default Packages;