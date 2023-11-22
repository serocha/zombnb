import { GoogleLogin } from '@react-oauth/google';
import classes from './login.module.scss';
import Logo from '../assets/logo.png';

const Login = () => {

  return (
  <>
    <div className={classes.loginBackground}>
      <div className={classes.loginWrapper}>
        <img src={Logo} className={classes.logo} alt='zomBnB logo' />
        <div className={classes.logoFont}>Welcome Back</div>
        <form className={classes.loginForm}>
          <input type="text" placeholder='Email'/>
          <input type="password" placeholder='Password' />
          <hr/>
          <button className={classes.signInBtn}>Sign In</button>
          <div style={{textAlign: "center"}}>or</div>
          <br></br>
          <div className={classes.googleLogin}>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          </div>
        </form>
      </div>
    </div>
  </>
  );
}

export default Login;