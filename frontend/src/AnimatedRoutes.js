import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import AboutPage from './pages/AboutPage/AboutPage';
import AccommodationPage from './pages/AccommodationPage/AccommodationPage';
import BeachesPage from './pages/Features/BeachesPage/BeachesPage';
import BirdsPage from './pages/Features/BirdsPage/BirdsPage';
import BoatingPage from './pages/Features/BoatingPage/BoatingPage';
import BookingPage from './pages/BookingPage/BookingPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FAQPage from './pages/FAQPage/FAQPage';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage';
import HikingPage from './pages/Features/HikingPage/HikingPage';
import HomePage from './pages/HomePage/HomePage';
import LocationPage from './pages/LocationPage/LocationPage';
import OceanPage from './pages/Features/OceanPage/OceanPage';
import PrivacyPage from './pages/PrivacyPage/PrivacyPage';
import StargazingPage from './pages/Features/StargazingPage/StargazingPage';
import SwimmingPage from './pages/Features/SwimmingPage/SwimmingPage';
import TermsPage from './pages/TermsPage/TermsPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path={'/'} element={<HomePage />} />
      <Route path={'accommodation'} element={<AccommodationPage />} />
      <Route path={'location'} element={<LocationPage />} />
      <Route path={'features'}>
        <Route path={''} element={<FeaturesPage />} />
        <Route path={'boating'} element={<BoatingPage />} />
        <Route path={'swimming'} element={<SwimmingPage />} />
        <Route path={'birds'} element={<BirdsPage />} />
        <Route path={'beaches'} element={<BeachesPage />} />
        <Route path={'hiking'} element={<HikingPage />} />
        <Route path={'ocean'} element={<OceanPage />} />
        <Route path={'stars'} element={<StargazingPage />} />
      </Route>
      <Route path={'book'} element={<BookingPage />} />
      <Route path={'contact'} element={<ContactPage />} />
      <Route path={'about'} element={<AboutPage />} />
      <Route path={'faq'} element={<FAQPage />} />
      <Route path={'terms'} element={<TermsPage />} />
      <Route path={'privacy'} element={<PrivacyPage />} />
      <Route path={'*'} element={<ErrorPage />} />
    </Routes>
  );
};

export default AnimatedRoutes;
