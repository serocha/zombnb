import classes from './header.module.scss';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <>
      <header id='#top' className={classes.headerStyle}>
        <div className={classes.logoContainer}>
          <a href='/' style={{borderRadius: '50%'}}>
            <img src={Logo} className={classes.headerLogo} alt="zomBnB logo"/>
          </a>
          <span className={classes.logoFont}>zomBnB</span>
        </div>
        <div id='nav-links' className={classes.navLinks}>
          <a href='#about' className={classes.navLink}>About</a>
          <a href='#services' className={classes.navLink}>Services</a>
          <a href='destinations' className={classes.navLink}>Properties</a>
          <a href='login' className={classes.navLink}>Sign In</a>
          <a href='new-account' className={classes.headerCTA}>Get Started</a>
        </div>
        <div>

        </div>
      </header>
    </>
  );
}

export default Header;