import classes from './footer.module.scss';
import Mark from '../assets/github-mark.svg';

const Footer = () => {
  return (
    <>
      <footer 
        className={classes.footerWrapper}>
        <div 
          className={[classes.footerNav, classes.footerNavLeft].join(' ')}>
          <div>
            <a href='mailto:info.zombnb@gmail.com'>Contact us</a>
          </div>
          <div>Credits</div>
          <a 
            href='https://github.com/serocha/zombnb'
            style={{width: '34px', borderRadius: '50%'}}
            target='_blank'
          >
            <img 
              src={Mark}
              className={classes.githubLogo}
            />
          </a>          
        </div>
        <div 
          className={[classes.footerNav, classes.footerNavRight].join(' ')}>
          <a>About</a>
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
          <a>Copyright Policy</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;