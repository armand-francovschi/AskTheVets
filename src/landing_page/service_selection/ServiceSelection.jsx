import "./ServiceSelection.css"; // Import CSS file

const ServicesSection = () => {
  return (
    <section className="services-container">
      <h2 className="services-title">Love and care for your beloved pet!</h2>
      <div className="services-grid">
        <button className="service-buttonn">Blog</button>
        <button className="service-buttonn">Telemedicina Veterinara</button>
        <button className="service-buttonn">Servicii de Îngrijire</button>
        <button className="service-buttonn">Forum</button>
      </div>
    </section>
  );
};

export default ServicesSection;
