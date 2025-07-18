// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Children will be rendered in the <Outlet /> inside Layout */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
