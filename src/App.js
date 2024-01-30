import logo from './logo.svg';
import './App.css';
// import Dashboard from './components/Dashboard';
// // import { Form } from 'react-router-dom';
import Form from './components/Form';
// import Test from './components/Test';
// import Test1 from './components/Test1';
import Props from './components/Props';
// import Props1 from './components/Props1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import PrivacyP from './components/PrivacyP';
import Privacy from'./components/Privacy';
import Blogs from './components/Blogs';
import Grid from './components/Grid';
import Blog from './components/Blog';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import Testing from './components/Testing';
import BlogMain from './components/BlogMain';
import Pagination from './components/Pagination';
import Carousel from './components/Carousel';
import Carousel1 from './components/Carousel';
import CarTest from './components/CarTest'
import BlogTest from './components/BlogTest';
import TestPage from './components/TestPage';
import Tpage from './components/Tpage';
import OffersPopup from './components/OffersPopup';
import ServicePage from './components/ServicePage';
import TableData from './components/TableData';
import TDataTest from './components/TDataTest';
import DataT from './components/DataT';
import TestTable from './components/TestTable';
import Card from './components/Card';
import Popup from './components/Popup';
import PopupTest from './components/PopupTest';
import SubsPage from './components/SubsPage';
import TagsPage from './components/TagsPage';
import TagTest from './components/TagTest';
import BookingConfirmation from './components/BookingConfirmation';
import RfpPage from './components/RfpPage';
import ContactUs from './components/ContactUs';
import Testimonial from './components/Testimonial';
import HomePage from './aaveg/HomePage';




function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path={'*'} element={<>Hello</>} />
      <Route path={'/'} element={<><Props /></>} />
      <Route path={'testing'} element={<><Testing /></>} />

      {/* <Route path={'/dashboard'} element={<><Dashboard/></>}/> */}
      <Route path={'/carousel1'} element={<><Carousel1/></>}/>
      <Route path={'/cartest'} element={<><CarTest/></>}/>
      <Route path={'/blogmain'} element={<><BlogMain/></>}/>
      <Route path={'/pagination'} element={<><Pagination/></>}/>
      <Route path={'/form'} element={<><Form/></>}/>
      {/* <Route path={'/home'} element={<><Home/></>}/> */}
      <Route path={'/blog1'} element={<><Blog1/></>}/>
      <Route path={'/testpage'} element={<><TestPage/></>}/>
      <Route path={'/tpage'} element={<><Tpage/></>}/>
      <Route path={'/offerspopup'} element={<><OffersPopup/></>}/>
      <Route path={'/servicepage'} element={<><ServicePage/></>}/>
      <Route path={'/tabledata'} element={<><TableData/></>}/>
      <Route path={'/TDataTest'} element={<><TDataTest/></>}/>
      <Route path={'/datat'} element={<><DataT/></>}/>
      <Route path={'/testtable'} element={<><TestTable/></>}/>
      <Route path={'/card'} element={<><Card/></>}/>
      <Route path={'/popup'} element={<><Popup/></>}/>
      <Route path={'/popuptest'} element={<><PopupTest/></>}/>
      <Route path={'/form'} element={<><Form/></>}/>
      <Route path={'/privacy'} element={<><Privacy/></>}/>
      <Route path={'/subspage'} element={<><SubsPage/></>}/>

      <Route path={'/blogtest'} element={<><BlogTest/></>}/>
      {/* <Route path={'/tagtest'} element={<><TagTest/></>}/> */}

      {/* <Route path={'/blog2/:slug'} element={<><Blog2/></>}/> */}
      <Route path={'/blog/:categoryName/:slug'} element={<><Blog/></>}/>
      <Route path={'/blog/tag/:tag'} element={<><TagsPage/></>}/>
      {/* <Route path={'/blog/:tag'} element={<><TagsPage/></>}/> */}

      <Route path={'/bookingconfirmation'} element={<><BookingConfirmation/></>}/>
      <Route path={'/rfppage'} element={<><RfpPage/></>}/>
      <Route path={'/contactus'} element={<><ContactUs/></>}/>
      <Route path={'/testimonial'} element={<><Testimonial/></>}/>
      <Route path={'/homepage'} element={<><HomePage/></>}/>



      
      
      

      


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
