import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout.js';
import Splash from './pages/Splash.js';
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';
import PropertyList from './pages/PropertyList.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Splash/> } />
          <Route path="login" element={ <Login/> } />
          <Route path="profile" element={ <Profile/> } />
          <Route path="properties" element={ <PropertyList/> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
