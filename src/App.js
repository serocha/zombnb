import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Profile from './pages/Profile.js';
import PropertyList from './pages/PropertyList.js';
import Privacy from './pages/policies/Privacy.js';
import Terms from './pages/policies/Terms.js';
import './App.css';

/*
 * The root application function. Provides routing for the various pages.
 */

const App = () => {
  return (
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
        <Route path='create-account' element={ <SignUp/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
