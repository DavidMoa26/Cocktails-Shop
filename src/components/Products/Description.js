import classes from './Description.module.css';

const Description = () => {
  return (
    <section className={classes.summary}>
      <h2>Welcome to Cocktail Art store</h2>
      <h5>
        We have amazing cocktail cases that you must try
      </h5>
      <p>
        Our bottled cocktails are prepared by mixologists who have won and participated in bartending competitions in Israel and around the world.
        The cocktails are "handmade" with fresh fruit juices, herbs and spices, premium alcohol and the special magic of cocktails!
      </p>
    </section>
  );
};

export default Description;
