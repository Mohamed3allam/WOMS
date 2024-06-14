import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { styled } from 'styled-components';
import Loading from './components/loading/Loading';

import 'animate.css';
import WOW from 'wowjs';
import Navbar from './components/navbar/Navbar'
import NotFound from './pages/404/404';
const PackageAdvantages = lazy(() => import('./pages/memberships/packages/package-advantages/PackageAdvantages'))
const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Doctor = lazy(() => import('./pages/doctors/doctor/Doctor'));
const Memberships = lazy(() => import('./pages/memberships/Memberships'));
const Registration = lazy(() => import('./pages/registration/Registration'));
const Services = lazy(() => import('./pages/services/Services'));
const Library = lazy(() => import('./pages/library/Library'));
const Credits = lazy(() => import('./pages/credits/Credits'));
const Erasmus = lazy(() => import('./pages/erasmus/Erasmus'));
const Certificate = lazy(() => import('./pages/certificates/certificate/Certificate'));
const OurCertificates = lazy(() => import('./pages/certificates/our-certificates/OurCertificates'));
const FindYourCertificate = lazy(() => import('./pages/certificates/find-your-certificate/FindYourCertificate'));
const Footer = lazy(() => import('./components/footer/Footer'));

const Wrapper = styled.div`
`
function App() {
  //IMPORTING IMAGES
  function importAll(r) {
    let images = {};
      r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
  }
  const images = importAll(require.context('./assets/images', true, /\.(png|jpe?g|svg|gif|webp|mp4|fbx)$/));

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])

  return (
    <>
      <Router basename='/WOMS'>
          <Navbar images={images} />
          <Wrapper>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route index element={<Home images={images} />} />
                <Route exact path='about' element={<About images={images} />} />
                <Route exact path='contact' element={<Contact images={images} />} />
                <Route path='memberships/*' element={<Memberships images={images} />} >
                  <Route path='*' element={<Memberships images={images} />} />
                </Route>
                <Route exact path='registration' element={<Registration images={images} />} />
                <Route exact path='services' element={<Services images={images} />} />
                <Route exact path='library' element={<Library images={images} />} />
                <Route exact path='credits' element={<Credits images={images} />} />
                <Route exact path='erasmus' element={<Erasmus images={images} />} />

                <Route path='certificate/:certificate_code' element={<Certificate images={images} />} />

                <Route exact path='our-certificates' element={<OurCertificates images={images} />} />
                <Route exact path='find-your-certificate' element={<FindYourCertificate images={images} />} />
                <Route exact path='package-advantages' element={<PackageAdvantages images={images} />} />

                <Route path='doctor/*' element={<Doctor images={images} />} >
                  <Route path="*" element={<Doctor images={images} />} />
                </Route>
                
                <Route exact path='*' element={<NotFound images={images} />} />
              </Routes>
            </Suspense>
          </Wrapper>
          <Footer images={images} />
      </Router>
    </>
  )
}

export default App;
