import classes from './form-wrapper.module.scss';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

/* A wrapper for the login and signup forms */
const Form = (props) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  }

  return (
    <div className={classes.background}>
      <div className={classes.wrapper}>
        <img src={Logo} className={classes.logo} alt='zomBnB logo' />
        <br/>
        {props.children}
      <div className={classes.backBtnWrapper} onClick={goBack}>
        <button className={classes.backBtn}>
          <span className={classes.arrow}>🞀</span>&nbsp;&nbsp;Back To Danger
        </button>
      </div>
      </div>
    </div>
  );
}

export default Form;