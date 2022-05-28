import * as React from 'react';
import { Route, Routes } from 'react-router';
import withRoot from './config/withRoot';
import AboutPage from './pages/AboutPage/AboutPage';
import AccommodationPage from './pages/AccommodationPage/AccommodationPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';
import AppFooter from './components/AppFooter/AppFooter';
import BookingPage from './pages/BookingPage/BookingPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FAQPage from './pages/FAQPage/FAQPage';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import TermsPage from './pages/TermsPage/TermsPage';

function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <Routes>
        <Route exact path={'/'} element={<HomePage/>}/>
        <Route path={'accommodation'} element={<AccommodationPage/>}/>
        <Route path={'location'} element={<LocationPage/>}/>
        <Route path={'activities'} element={<ActivitiesPage/>}/>
        <Route path={'book'} element={<BookingPage/>}/>
        <Route path={'contact'} element={<ContactPage/>}/>
        <Route path={'about'} element={<AboutPage/>}/>
        <Route path={'faq'} element={<FAQPage/>}/>
        <Route path={'terms'} element={<TermsPage/>}/>
        <Route path={'privacy'} element={<PrivacyPage/>}/>
        <Route path={'*'} element={<ErrorPage/>}/>
      </Routes>
      <AppFooter/>
    </>
  );
}

export default withRoot(App);
