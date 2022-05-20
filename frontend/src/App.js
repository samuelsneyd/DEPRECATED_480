import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AboutPage from './pages/AboutPage/AboutPage';
import AccommodationPage from './pages/AccommodationPage/AccommodationPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import AppFooter from './components/AppFooter/AppFooter';
import BookingPage from './pages/BookingPage/BookingPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import NavigationBar from './components/AppAppBar/NavigationBar';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import TermsPage from './pages/TermsPage/TermsPage';

function App() {
  return (
    <>
      <NavigationBar/>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<HomePage/>}/>
          <Route path={'accommodation'} element={<AccommodationPage/>}/>
          <Route path={'location'} element={<LocationPage/>}/>
          <Route path={'activities'} element={<ActivitiesPage/>}/>
          <Route path={'book'} element={<BookingPage/>}/>
          <Route path={'contact'} element={<ContactPage/>}/>
          <Route path={'about'} element={<AboutPage/>}/>
          <Route path={'terms'} element={<TermsPage/>}/>
          <Route path={'privacy'} element={<PrivacyPage/>}/>
          <Route path={'*'} element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      <AppFooter/>
    </>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App/>);

export default App;
