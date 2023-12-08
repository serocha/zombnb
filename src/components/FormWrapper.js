import classes from './form-wrapper.module.scss';
import Logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

/* A wrapper for the login and signup forms */
const Form = (props) => {

  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate('/');
  }

  const toSignUp = () => {
    navigate('/create-account');
  }

  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <img src={Logo} className={classes.logo} alt='zomBnB logo' />
        <br/>
        {props.children}
      <div className={classes.backBtnWrapper}>
        <button className={[classes.link, classes.backBtn].join(' ')} onClick={goBack}>
          <span className={classes.arrow}>🞀</span>&nbsp;&nbsp;Back To Danger
        </button>
        {(location.pathname === '/login') && <button className={[classes.link, classes.signInBtn].join(' ')} onClick={toSignUp}>
          Create a new account
        </button>}
      </div>
      </div>
    </div>
  );
}

export default Form;