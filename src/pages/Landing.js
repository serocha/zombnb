import classes from './landing.module.scss';

/* landing page main body */
const Landing = () => {
  return (
    <>
      <main>
      <section>
        <div className={classes.heroWrapper}>
          <div className={classes.hero}>
            <div className={classes.heroTitle}>Find your place<br/>to rest in peace</div>
            <div className={classes.heroText}>
              The post-incident world is hard enough.<br/>Vacation rentals shouldn't be.
            </div>
            <div className={classes.heroBtnWrapper}>
              <button className={classes.heroBtn}>Book Now</button>
            </div>
          </div>
          <div className={classes.heroImg} />
        </div>
      </section>
      </main>
    </>
  );
}

export default Landing;