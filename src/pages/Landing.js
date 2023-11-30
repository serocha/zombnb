import classes from './landing.module.scss';

const Splash = () => {
  return (
    <>
      <main>
      <section>
        <div className={classes.heroWrapper}>
          <div className={classes.hero}></div>
          <div className={classes.heroImg} />
        </div>
      </section>
      </main>
    </>
  );
}

export default Splash;