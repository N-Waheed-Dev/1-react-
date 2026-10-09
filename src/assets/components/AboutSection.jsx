
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-card orange-card">
          <h2 className="card-title">20+ Years Experience</h2>
          <p className="card-description">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit
          </p>
          <a href="#get-started" className="btn-light"> Get Started </a>
        </div>

        <div className="about-card blue-card">
          <div className="blue-card-content">
            <h2 className="card-title">Who We Are</h2>
            <p className="card-description">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit
            </p>
            <a href="#get-started" className="btn-light"> Get Started </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;