// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ReturnCancellation from './pages/ReturnCancellations/ReturnCancellation.jsx';

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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
