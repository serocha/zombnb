import classes from './header.module.scss';
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <>
      <header class={classes.headerStyle}>
        <div style={{display: 'flex'}}>
          <a href='/'>
            <img src={Logo} class={classes.headerLogo}/>
          </a>
          <span class={classes.logoFont}>ZomBnB</span>
        </div>
        <div id='nav-links' class={classes.navLinks}>
          <a href='#'>About</a>
          <a href='#'>Services</a>
          <a href='#'>Listings</a>
          <a href='login'>Sign In</a>
          <a href='#'>Register</a>
        </div>
        <div>

        </div>
      </header>
    </>
  );
}

export default Header;