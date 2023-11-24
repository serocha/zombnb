import { useState } from 'react';
import classes from './footer.module.scss';
import Mark from '../assets/github-mark.svg';
import Thumb from '../assets/thumbs-up.png';

const Footer = () => {

  const [showCredits, setShowCredits] = useState(false);  // controls credits modal

  const openCredits = () => {
    setShowCredits(true);
  }

  const closeCredits = () => {
    setShowCredits(false);
  }

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
              <a 
                style={{marginLeft: '16px', cursor: 'pointer'}}
                onClick={openCredits}
              >
                  Credits
              </a>
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

      {showCredits && (
        <div 
          className={classes.modal}
          onClick={closeCredits}
        >
          <div 
            className={classes.modalWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={classes.modalClose}>
              <div 
                className={classes.closeBtn}
                onClick={closeCredits}
              />
            </div>
            <div className={classes.modalContent}>
              <div className={classes.modalText}>
                <p>On behalf of all of us here at zomBnB, we hope you enjoy your stay.</p>
                <p><b>Thank you!</b></p>
                <p>Jake Black & Shane Rocha</p>
              </div>
              <div>
                <img 
                  src={Thumb}
                  className={classes.modalImg}
                  alt='zombie thumbs up' />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;