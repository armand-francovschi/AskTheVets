import React from 'react';
import './Feedback.css'; // Import the external CSS file

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h2 className="feedback-title">What Our Clients Say</h2>

      <div className="feedback-cards">
        {/* Feedback Card 1 */}
        <div className="feedback-card">
          <div className="card-header">
            <div className="pet-image-container">
              <img
                src="https://cloud.vetster.com/images/homepage/review-bird.jpg"
                alt="Pet"
                className="pet-image"
              />
            </div>
            <div>
              <p className="client-name">John Doe</p>
              <p className="client-position">Pet Parent</p>
            </div>
          </div>
          <p className="feedback-text">"Vetster has been an absolute lifesaver for our pets! The vets are knowledgeable, professional, and always put our animals first. Highly recommend!"</p>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>

        {/* Feedback Card 2 */}
        <div className="feedback-card">
          <div className="card-header">
            <div className="pet-image-container">
              <img
                src="https://cloud.vetster.com/images/homepage/review-bird.jpg"
                alt="Pet"
                className="pet-image"
              />
            </div>
            <div>
              <p className="client-name">Jane Smith</p>
              <p className="client-position">Animal Lover</p>
            </div>
          </div>
          <p className="feedback-text">"Fantastic service! Easy to use, and the vet was incredibly kind. I could not ask for a better experience."</p>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>

        {/* Feedback Card 3 */}
        <div className="feedback-card">
          <div className="card-header">
            <div className="pet-image-container">
              <img
                src="https://cloud.vetster.com/images/homepage/review-bird-f3b3e7.png"
                alt="Pet"
                className="pet-image"
              />
            </div>
            <div>
              <p className="client-name">Mary Johnson</p>
              <p className="client-position">Pet Owner</p>
            </div>
          </div>
          <p className="feedback-text">"The convenience of having a vet available remotely was incredible. I feel at ease knowing I can consult a professional whenever I need to."</p>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
          </div>
        </div>
        {/* Feedback Card 3 */}
        <div className="feedback-card">
          <div className="card-header">
            <div className="pet-image-container">
              <img
                src="https://cloud.vetster.com/images/homepage/review-cat-f3b3e8.png"
                alt="Pet"
                className="pet-image"
              />
            </div>
            <div>
              <p className="client-name">Mary Johnson</p>
              <p className="client-position">Pet Owner</p>
            </div>
          </div>
          <p className="feedback-text">"The convenience of having a vet available remotely was incredible. I feel at ease knowing I can consult a professional whenever I need to."</p>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
        {/* Feedback Card 3 */}
        <div className="feedback-card">
          <div className="card-header">
            <div className="pet-image-container">
              <img
                src="https://cloud.vetster.com/images/homepage/review-bird.jpg"
                alt="Pet"
                className="pet-image"
              />
            </div>
            <div>
              <p className="client-name">Mary Johnson</p>
              <p className="client-position">Pet Owner</p>
            </div>
          </div>
          <p className="feedback-text">"The convenience of having a vet available remotely was incredible. I feel at ease knowing I can consult a professional whenever I need to."</p>
          <div className="rating-stars">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="star">&#9734;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
