import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import classes from './profile-page.module.scss';

const ProfilePage = () => {
  const [willDisplay, setWillDisplay] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login');
  }

  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');

    if (!authToken) {
      navigate('/login');
    } else {
      fetch('https://zombnb.serocha.com/auth', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        if (response.ok) {
          setWillDisplay(true)
        } else {
          //navigate('/login');
        }
      });
    }
  }, [navigate, setWillDisplay]);

  const profile = () => {
    return(
      <div className={classes.main}>
        <h2>Congratulations!</h2>
        <p>You logged in.</p>
        <br/>
        <br/>
        <button className={classes.logout} onClick={logout}>Log Out</button>
      </div>
    )
  }

  return (
    <>
      <Header />
      {!willDisplay ? <div>Loading...</div> : profile()}
      <Footer />
    </>
  );
};

export default ProfilePage;