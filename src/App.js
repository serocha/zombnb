import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from './components/Layout.js';
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Profile from './pages/Profile.js';
import PropertyList from './pages/PropertyList.js';
import Privacy from './pages/policies/Privacy.js';
import Terms from './pages/policies/Terms.js';
import './App.css';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="14490869977-usv9k651oa4eklrjip5s8lnt2s29igdb.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Landing/> } />
            <Route path='profile' element={ <Profile/> } />
            <Route path='destinations' element={ <PropertyList/> } />
            <Route path='privacy-policy' element={ <Privacy/> } />
            <Route path='terms-and-conditions' element={ <Terms/> } />
          </Route>
          <Route path='login' element={ <Login/> } />
          <Route path='new-account' element={ <SignUp/> } />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
