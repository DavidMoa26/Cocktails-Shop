import Card from '../UI/Card';
import Product from './Product/Product';
import classes from './Bartools.module.css';
import shaker from '../../assets/bartools/shk.png'
import GoldShaker from '../../assets/bartools/sh-gold.png'
import BrozeShaker from '../../assets/bartools/BrozeShaker.png'
import JigGold from '../../assets/bartools/jig-goldd.png'
import JigSilver from '../../assets/bartools/jig-silv.jpg'
import spoon from '../../assets/bartools/spoon-silver.jpeg'
import muddler from '../../assets/bartools/mud-silv.png'
import strainer from '../../assets/bartools/st.jpg'
import doubleStrainer from '../../assets/bartools/dst.jpg'




const BAR_TOOLS = [
    {
        id: 'b1',
        name: 'Tin-Tin shaker',
        description: "Professional cocktail shaker - 18 & 28 OZ",
        price: 56.99,
        image: GoldShaker
    },
    {
        id: 'b2',
        name: 'Tin-Tin shaker',
        description: "Professional cocktail shaker - 18 & 28 OZ",
        price: 56.99,
        image: BrozeShaker
    },
    {
        id: 'b3',
        name: 'Tin-Tin shaker',
        description: "Professional cocktail shaker - 18 & 28 OZ",
        price: 49.99,
        image: shaker
    },

    {
        id: 'b4',
        name: 'Jigger',
        description: "Professional jigger shaker 1 & 2 OZ",
        price: 15.99,
        image: JigGold
    },

    {
        id: 'b5',
        name: 'Jigger',
        description: "Professional jigger shaker 1 & 2 OZ",
        price: 13.99,
        image: JigSilver
    },
    {
        id: 'b6',
        name: 'Bar spoon',
        description: "30 cm bar spoon for mixing cocktails",
        price: 12.99,
        image: spoon
    },
    {
        id: 'b7',
        name: 'Muddler',
        description: "The muddler used to crush the cocktail ingredients",
        price: 14.99,
        image: muddler
    },
    {
        id: 'b8',
        name: 'Strainer',
        description: "A quality strainer for filtering the liquid after shaking for a smooth and clean texture",
        price: 18.99,
        image: strainer
    },
    {
        id: 'b9',
        name: 'Mesh strainer',
        description: "A strainer designed for double filtering for cocktails whose ingredients have been crushed",
        price: 9.99,
        image: doubleStrainer
    },
];

const Bartools = () => {
    const barToolsList = BAR_TOOLS.map((meal) => (
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
                <ul>{barToolsList}</ul>
            </Card>
        </section>
    );
};

export default Bartools;