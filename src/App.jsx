import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
// import FooterComponent from './components/FooterComponent';

import HomePage from './Pages/HomePage';
import KelasPage from './Pages/KelasPage';
import Testimonial from './Pages/Testimonial';
import SyaratKetenPage from './Pages/SyaratKetenPage';
import FaqPages from './Pages/FaqPages';
import FooterComponent from './components/FooterComponent';

function App() {
  return (<div>
    <NavbarComponent />

    <Routes>
      <Route path='/' Component={HomePage} />
      <Route path='/kelas' Component={KelasPage} />
      <Route path='/testimonial' Component={Testimonial} />
      <Route path='/faq' Component={FaqPages} />
      <Route path='/syaratketen' Component={SyaratKetenPage} />
    </Routes>

    <FooterComponent />
  </div>
  )
}

export default App
