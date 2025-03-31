import Navbar from "../navbar/Navbar.jsx";
import AboutUs from "./about_us/AboutUs.jsx";
import AnimalServices from "./animal_services/AnimalServices.jsx";
import BlogPreview from "./blog_preview/BlogPreview.jsx";
import DigitalAgenda from "./digital_agenda/DigitalAgenda.jsx";
import FAQ from "./faq/FAQ.jsx";
import Feedback from "./feedback/Feedback.jsx";
import ServicesSection from "./service_selection/ServiceSelection.jsx";
import TeleVet from "./tele_vet/TeleVet.jsx";
import UserAccess from "./user_access/UserAccess.jsx";
import WebsiteFAQ from "./website_faq/WebsiteFAQ.jsx";

const LandingPage = () => {
  return (
    <div >
      <Navbar />
      <ServicesSection />
      {/* <UserAccess/> */}
      <AboutUs />
      <BlogPreview />
      <TeleVet />
      <FAQ />
      <DigitalAgenda />
      <AnimalServices />
      <Feedback />
      <WebsiteFAQ />
    </div>
  );
};

export default LandingPage;
