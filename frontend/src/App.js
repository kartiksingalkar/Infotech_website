import "./styles/style.css";
import "./styles/test.css";
import "./styles/services.css";
import "./styles/contact.css";
import "./styles/testimonial.css";
import "./styles/homenew.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WithNvabar from "./components/WithNvabar";
import About from "./pages/About";
import Digital from "./pages/DigitalMarketing";
import MobileDevelopment from "./pages/MobileDevelopment";
import WebDev from "./pages/WebDev";
import Uiux from "./pages/Uiux";
import Hrms from "./pages/Hrms";
import Crm from "./pages/Crm";
import B2B from "./pages/B2B";
import Erp from "./pages/Erp";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
// import Blogs from "./pages/Blogs";
// import BlogsView from "./pages/BlogsView";
// import CaseStudies from "./pages/CaseStudies";
// import CaseStudiesView from "./pages/CaseStudiesView";
// import Popup from "./components/Popup";
import NotFound from "./pages/NotFound";
import MarketingSolutions from './pages/MarketingSolutions';
import ITSolutions from './pages/ITSolutions';
import Event from "./pages/Evenet";
import DatabaseServices from "./pages/DatabaseServices";
import DigitalMaketingMain from "./pages/DigitalMaketingMain";
import EventSpportMain from "./pages/EventSpportMain";
import B2bDatabaseMain from "./pages/B2bDatabaseMain";
import B2bMarketingMain from "./pages/B2bMarketingMain";
import WithCareerFooter from "./components/WithCareerFooter";
import PrivacyPolicy from "./pages/PrivacyPolicy"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<WithNvabar />} className='app'>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/market' element={<MarketingSolutions />} />
            <Route path='/it-solutions' element={<ITSolutions />} />
            {/* <Route path='/digital-marketing' element={<Digital />}/> */}
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/uiux" element={<Uiux />} />
            <Route path="/hrms" element={<Hrms />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/erp" element={<Erp />} />
            <Route path="/b2b/:id" element={<B2B />} />
            <Route path="/digital-marketing/:id" element={<Digital />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path={"/post/:id"} element={<BlogsView />} /> */}
            {/* <Route path='/blogsview-1' element={<BlogsView />} /> */}
            {/* <Route path="/casestudies" element={<CaseStudies />} /> */}
            {/* <Route path="/casestudies-1" element={<CaseStudiesView />} /> */}
            
            <Route path="/event_support/:id" element={<Event />} />
            <Route path="/database_services/:id" element={<DatabaseServices />} />
            <Route path="/digital-marketing" element={<DigitalMaketingMain />} />
            <Route path="/b2b_marketing" element={<B2bMarketingMain />} />
            <Route path="/event_support" element={<EventSpportMain />} />
            <Route path="/database_services" element={<B2bDatabaseMain />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<WithCareerFooter />} className='app'>
            <Route path="/career" element={<Career />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
