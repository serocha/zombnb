import { useState, useEffect } from 'react';
import FormWrapper from '../components/FormWrapper';
import classes from './form.module.scss';

/*
 * Handles the signup UI, manages form data, and submits a request to the login endpoint
 */
const SignUp = () => {

  // state for sign up form 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [verifyPassword, setVerifyPassword] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [db_Err, setDB_Err] = useState('');
  const [unameErr, setUnameErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  // send request to the server
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zombnb.serocha.com/verify-new-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (!response.ok) {  // 200 range
        const data = await response.json();
        setDB_Err(data.msg);
      }

    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;  // get the name and value of the input

    if (name === 'username') {
      isUsernameValid(value) ? setUnameErr(false) : setUnameErr(true);
    } else if (name === 'password') {
      isPasswordValid(value) ? setPassErr(false) : setPassErr(true);
    }

    setFormData({
      ...formData,
      [name]: trimValue(value)
    });
  }

  const handleVerifyPasswordChange = (event) => {
    setVerifyPassword(trimValue(event.target.value));
  }

  const trimValue = (value) => {
    return value.length > 25 ? value.slice(0 ,25) : value;
  }

  const isUsernameValid = (username) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9_-]{4,}$/;
    return regex.test(username);
  }

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
    return regex.test(password);
  }

  // check state updates in the useEffect hook, since state updates are asyncronous
  useEffect(() => {
    formData.password === verifyPassword ? setIsShown(false) : setIsShown(true);
  }, [formData.password, verifyPassword]);

  // HTML rendered
  return (
  <FormWrapper>
    <div className={classes.logoFont}>Join Us...</div>
    <form name='login' className={classes.loginForm} onSubmit={handleSubmit}>
      <div>
        <div style={{fontSize: "large"}}>Create a new account</div>
        <br/>
        <div className={classes.label}>Username</div>
        <input 
          type='text'
          name='username'
          autoComplete='off'
          value={formData.username}
          onChange={(e) => handleInputChange(e)}
          className={classes.signupInput}
          required />
        <div className={[classes.warning, (unameErr ? classes.show : classes.hide)].join(' ')}>Invalid username (must be at least 5 characters)</div>
        <br/>
      </div>
      <div>
      <input
          className={classes.emailInput}
          type='email'
          name='email'
          autoComplete='off'
          value={formData.email}
          onChange={(e) => handleInputChange(e)} />
      </div>
      <div>
        <div className={classes.label}>Password</div>
        <input 
          type='password'
          name='password'
          autoComplete='off'
          value={formData.password}
          onChange={(e) => handleInputChange(e)}
          className={classes.signupInput}
          required />
        <div className={[classes.warning, (passErr ? classes.show : classes.hide)].join(' ')}>Password too weak (must include lower, upper, number, and symbol)</div>
        <br/>
      </div>
      <div>
        <div className={classes.label}>Confirm Password</div>
        <input 
          type='password'
          autoComplete='off'
          value={verifyPassword}
          onChange={(e) => handleVerifyPasswordChange(e)}
          style={{marginBottom: 4}}
          className={classes.signupInput}
          required />
        <div className={[classes.warning, (isShown ? classes.show : classes.hide)].join(' ')}>Passwords do not match</div>
      </div>
      <hr/>
      <button className={classes.signInBtn}>Sign In</button>
      {db_Err && <div style={{ color: 'red', textAlign: 'center' }}>{db_Err}</div>}
      <br/>
      <hr className={classes.separator}/>
    </form>
  </FormWrapper>
  );
}

export default SignUp;