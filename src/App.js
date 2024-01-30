import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Form } from 'react-router-dom';
// import Form from './components/Form';
import Test from './components/Test';
import Test1 from './components/Test1';
import Props from './components/Props';
import Props1 from './components/Props1';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PrivacyP from './components/PrivacyP';
import Privacy from'./components/Privacy';
import Blogs from './components/Blogs';
import Grid from './components/Grid';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Testing from './components/Testing';


function App() {

  return (
    // <Dashboard/>
    <BrowserRouter>
    <Routes>
    <Route path={'*'} element={<>Hello</>} />
      <Route path={'/'} element={<><Props /></>} />
      <Route path={'/blog2'} element={<><Blog2 /></>}/>
    </Routes>
    </BrowserRouter>
    // <Home/>
    // <PrivacyP/>
    // <Privacy/>
    // <Blogs/>
    // <Grid/>
    // <Blog1/>
  );
}

export default App;
