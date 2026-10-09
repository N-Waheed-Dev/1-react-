
import './SupportSection.css';
import supportImg from "../pages/support-img.png";
function SupportSection() {
  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-image-wrapper">
          <img src={supportImg}  alt="24/7/365 Support Illustration"  className="support-image"  />
        </div>

        <div className="support-content">
          <h2 className="support-title">24/7/365 Support</h2>
          
          <p className="support-text">
            Sample text. Click to select the Text Element. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          
          <p className="support-attribution">Image from Freepik</p>
          
          <a href="#get-started" className="btn-support">
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}

export default SupportSection;