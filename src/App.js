import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/NavBar/Navbar';
import Page1 from './Pages/Page1/Page1';
import About from './Pages/About/About';
import Calender from './Pages/Calender/Calender';
import Page4 from './Pages/Page4/Page4';
import DetailPage from './Pages/DetailPage/DetailPage';
import Policy from './Pages/Policy/Policy';
import Contact from './Pages/ContactUs/Contactus';
import ThankYou from './Pages/Thankyou/ThankYou';
function App() {
  return (<>
    <div className="flex flex-col">
     {/* <header className='text-blue-500 font-bold text-center text-xl'>
      Travel App
     </header> */}
   
     
     <div className='flex flex-col justify-center'>
      <Router>
      <div className='fixed top-0 z-10 w-full'>
     <Navbar />
     </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Page1 />} />
          <Route path='/destinations/detailpage' element={<DetailPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thankyou' element={<ThankYou />} />

        </Routes>
    <Footer />
      </Router>
     </div>
    </div>
    </>
  );
}

export default App;
