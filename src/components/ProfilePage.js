import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [willDisplay, setWillDisplay] = useState(false);
  const navigate = useNavigate();

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

  return (
    <>
      {!willDisplay ? <div>Loading...</div> : <div>Congratulations! You logged in!</div>}
    </>
  );
};

export default ProfilePage;