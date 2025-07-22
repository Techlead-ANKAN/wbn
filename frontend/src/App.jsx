// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './Layout/Layout.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ReturnCancellation from './pages/ReturnCancellations/ReturnCancellation.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Competition from './pages/Competition/Competition.jsx';
import Exhibition from './pages/Exhibition/Exhibition.jsx';
import MembersGallery from './pages/MembersGallery/MembersGallery.jsx';
import MentorsGallery from './pages/MentorGallery/MentorGallery.jsx';
import MembersSignup from './pages/MembersSignup/MembersSignup.jsx';
import Mentorship from './pages/Mentorship/Mentorship.jsx';
import Merchandise from './pages/Merchandise/Merchandise.jsx';
import Safari from './pages/Safari/Safari.jsx';
import TermsConditions from './pages/TermsConditions/TermsCondition.jsx';
import UsedGear from './pages/UsedGear/UsedGear.jsx';
import WildlifeParksandReserves from './pages/WildlifeParksandReserves/WildlifeParksandReserves.jsx';
import Workshop from './pages/Workshop/Workshop.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Children rendered inside Layout's <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="return-cancellation" element={<ReturnCancellation />} />
          <Route path="competition" element={<Competition />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="exhibition" element={<Exhibition />} />
          <Route path="members-gallery" element={<MembersGallery />} />
          <Route path="mentors-gallery" element={<MentorsGallery />} />
          <Route path="members-signup" element={<MembersSignup />} />
          <Route path="members-signup" element={<MembersSignup />} />
          <Route path="mentorship" element={<Mentorship />} />
          <Route path="merchandise" element={<Merchandise />} />
          <Route path="safari" element={<Safari />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="used-gear" element={<UsedGear />} />
          <Route path="wildlifeparks-reserves" element={<WildlifeParksandReserves />} />
          <Route path="workshop" element={<Workshop />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
