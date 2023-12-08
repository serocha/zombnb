import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout.js';
import Landing from './pages/Landing.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Privacy from './pages/policies/Privacy.js';
import ProfilePage from './components/ProfilePage.js';
import Terms from './pages/policies/Terms.js';
import './App.css';

/*
 * The root application function. Provides routing for the various pages.
 */

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={ <Landing/> } />
          <Route path='privacy-policy' element={ <Privacy/> } />
          <Route path='terms-and-conditions' element={ <Terms/> } />
        </Route>
        <Route path='login' element={ <Login/> } />
        <Route path='create-account' element={ <SignUp/> } />
        <Route path="/profile" element={<ProfilePage />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
