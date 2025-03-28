import React, { useEffect, useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about-us-container">
      <div className="about-us-content">
        <h2>About Our Platform</h2>
        <p>
          Our platform is designed to provide a seamless user experience with a
          focus on simplicity and efficiency. We aim to bridge the gap between
          technology and everyday tasks, making life easier and more productive
          for everyone. Our commitment to innovation drives us to continuously
          improve and adapt to meet user needs.
          Our platform is designed to provide a seamless user experience with a
          focus on simplicity and efficiency. We aim to bridge the gap between
          technology and everyday tasks, making life easier and more productive
          for everyone. Our commitment to innovation drives us to continuously
          improve and adapt to meet user needs.
          Our platform is designed to provide a seamless user experience with a
          focus on simplicity and efficiency. We aim to bridge the gap between
          technology and everyday tasks, making life easier and more productive
          for everyone. Our commitment to innovation drives us to continuously
          improve and adapt to meet user needs.
        </p>
      </div>
      <div
        className="about-us-image"
        style={{
          transform: `translateX(${scrollPosition * 0.2}px)`,
          opacity: scrollPosition > 100 ? 1 : 0, // Make the image fade in as it slides in
        }}
      >
        <img
          src="https://www.shutterstock.com/image-vector/cat-dog-solve-problem-animals-600nw-2399087455.jpg"
          alt="About Us"
        />
      </div>
    </section>
  );
};

export default AboutUs;
