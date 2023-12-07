import { useState, useEffect } from 'react';
import FormWrapper from '../components/FormWrapper';
import classes from './form.module.scss';

/*
 * Handles the login UI, manages form data, and submits a request to the login endpoint
 */
const SignUp = () => {

  // state for login form 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [verifyPassword, setVerifyPassword] = useState({password: ''});
  const [isShown, setIsShown] = useState(false);

  // send request to the server
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zombnb.serocha.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (response.ok) {  // 200 range
        const data = await response.json();
        console.log(data);
      }

    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  const handleUserChange = (event) => {
    let user = trimValue(event.target.value);
    setFormData({...formData, username: user});
  }

  const handleEmailChange = (event) => {
    let emailVal = trimValue(event.target.value);
    setFormData({...formData, email: emailVal});
  }

  const handlePasswordChange = (event) => {
    let pw = trimValue(event.target.value);
    setFormData({...formData, password: pw});
  }

  const handleVerifyPasswordChange = (event) => {
    let pw = trimValue(event.target.value);
    setVerifyPassword({password: pw});
  }

  const trimValue = (value) => {
    return value.length > 25 ? value.slice(0 ,25) : value;
  }

  // check state updates in the useEffect hook, since state updates are asyncronous
  useEffect(() => {
    formData.password === verifyPassword.password ? setIsShown(false) : setIsShown(true);
  }, [formData.password, verifyPassword.password]);

  // HTML rendered
  return (
  <FormWrapper>
    <div className={classes.logoFont}>Join Us...</div>
    <form name='login' className={classes.loginForm} onSubmit={handleSubmit}>
      <div style={{fontSize: "large"}}>Create a new account</div>
      <br/>
      <div className={classes.label}>
        Username
      </div>
      <input 
        type='text'
        autoComplete='off'
        value={formData.username}
        onChange={(e) => handleUserChange(e)}
        required />
      <input
        className={classes.emailInput}
        type='email'
        autoComplete='off'
        value={formData.email}
        onChange={(e) => handleEmailChange(e)} />
      <div className={classes.label}>
        Password
      </div>
      <input 
        type='password'
        autoComplete='off'
        value={formData.password}
        onChange={(e) => handlePasswordChange(e)}
        required />
      <div className={classes.label}>
        Confirm Password
      </div>
      <input 
        type='password'
        autoComplete='off'
        value={verifyPassword.password}
        onChange={(e) => handleVerifyPasswordChange(e)}
        style={{marginBottom: 4}}
        required />
      <div className={isShown ? classes.pwError : classes.pwValid}>Passwords do not match</div>
      <hr/>
      <button className={classes.signInBtn}>Sign In</button>
      <br/>
      <hr className={classes.separator}/>
    </form>
  </FormWrapper>
  );
}

export default SignUp;