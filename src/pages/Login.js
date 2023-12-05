import { useState } from 'react';
import classes from './login.module.scss';
import Logo from '../assets/logo.png';

const Login = () => {
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://zombnb.serocha.com/process-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      console.log(response.message);
      if (response.ok) {  // 200 range
        console.log(response.username);
      }

    } catch (error) {
      console.error('Error occurred while submitting form:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
  <>
    <div className={classes.loginBackground}>
      <div className={classes.loginWrapper}>
        <img src={Logo} className={classes.logo} alt='zomBnB logo' />
        <div className={classes.logoFont}>Welcome Back</div>
        <form name='login' className={classes.loginForm} onSubmit={handleSubmit}>
          <input 
            type='text'
            placeholder='Username'
            autoComplete='off'
            value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            required />
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
            required />
          <hr/>
          <button className={classes.signInBtn}>Sign In</button>
          <br/>
          <hr className={classes.separator}/>
        </form>
      </div>
    </div>
  </>
  );
}

export default Login;