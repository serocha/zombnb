import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormWrapper from '../components/FormWrapper';
import classes from './form.module.scss';

/*
 * Handles the login UI, manages form data, and submits a request to the login endpoint
 */
const Login = () => {

  // state for login form 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });  

  const navigate = useNavigate();

  // send request to the server
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zombnb.serocha.com/verify-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (response.ok) {  // 200 range
        const data = await response.json();
        if (data.token) {
          sessionStorage.setItem('authToken', data.token);
          navigate('/profile')
        } else {
          console.error('Token not found in response data');
        }
      } else {
        console.error('Server returned an error:', response.status);
      }
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('authToken')) {
      navigate('/profile')
    }
  })

  // HTML rendered
  return (
  <FormWrapper>
    <br/>
    <div className={classes.logoFont}>To Safety</div>
    <form name='login' className={classes.loginForm} onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='Username'
        autoComplete='off'
        value={formData.username}
        onChange={(e) => setFormData({...formData, username: e.target.value})}
        className={classes.loginInput}
        required />
      <br/>
      <input
        className={classes.emailInput}
        type='email'
        placeholder='Email'
        autoComplete='off'
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})} />
      <input 
        type='password'
        placeholder='Password' 
        autoComplete='off'
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
        className={classes.loginInput}
        required />
      <hr/>
      <button className={classes.signInBtn}>Sign In</button>
      <br/>
      <hr className={classes.separator}/>
    </form>
  </FormWrapper>
  );
}

export default Login;