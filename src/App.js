import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SelectedImages from './components/mainContent/selectedImages';
import PreparationTips from './components/preparation/prepTips';
import ServiceDetails from './components/mainContent/ServiceDetails'; // Import ServiceDetails
// import Services from './components/mainContent/services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/selectedImages" element={<SelectedImages />}></Route>
        <Route path="/services" element={<Home jumpToSection="services" />}></Route>
        <Route path="/preparation-tips" element={<PreparationTips />}></Route>
        <Route path="/pricing" element={<Home jumpToSection="packages" />}></Route>
        <Route path="/contacts" element={<Home jumpToSection="contacts" />}></Route>
        <Route path="/service-details/:urlName" element={<ServiceDetails />}></Route> {/* ServiceDetails Route */}
      </Routes>
    </Router>
    // <>
  );
}

export default App;
