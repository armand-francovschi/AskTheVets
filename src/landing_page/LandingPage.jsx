import Navbar from "../navbar/Navbar";
import AboutUs from "./about_us/AboutUs";
import AnimalServices from "./animal_services/AnimalServices.jsx";
import BlogPreview from "./blog_preview/BlogPreview";
import DigitalAgenda from "./digital_agenda/DigitalAgenda";
import FAQ from "./faq/FAQ";
import Feedback from "./feedback/Feedback.jsx";
import ServicesSection from "./service_selection/ServiceSelection";
import TeleVet from "./tele_vet/TeleVet";
import UserAccess from "./user_access/UserAccess";
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
