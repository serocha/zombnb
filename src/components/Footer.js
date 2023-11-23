import classes from './footer.module.scss';
import Mark from '../assets/github-mark.svg';

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.footerNavWrapper}>
          <div className={classes.footerNav}>
            <a href='/#about'>About</a>
            <a href='#top'>Back to Top</a>
            <a href='mailto:info.zombnb@gmail.com'>Contact Us</a>
            <div className={classes.creditsWrapper} style={{marginBottom: 0}}>
              <a 
                href='https://github.com/serocha/zombnb'
                style={{width: '34px', borderRadius: '50%'}}
                rel='noreferrer'
                target='_blank'>
                <img 
                  src={Mark}
                  className={classes.githubLogo}
                  alt='zomBnB logo'
                />
              </a>
              <div style={{marginLeft: '16px'}}>Credits</div>
            </div>          
          </div>
        </div>
        <hr className={classes.hrFooter} />
        <div 
          className={classes.footerBottom}>
          <div>© 2023 zomBnB</div>
          <a href='/privacy-policy'>Privacy</a>
          <a href='/terms-and-conditions'>Terms</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;