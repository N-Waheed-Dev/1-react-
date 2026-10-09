
import './Hero.css';
import heroImg from "../pages/hero-img.png";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="fire-icon animate__animated animate__pulse"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
	             <path d="M0 0h1024v1024H0z" fill="none" />
	                 <path fill="currentColor" d="M834.1 469.2A347.5 347.5 0 0 0 751.2 354l-29.1-26.7a8.09 8.09 0 0 0-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8c-1.4 1.5-3 1.9-4.1 2s-2.8-.1-4.3-1.5c-1.4-1.2-2.1-3-2-4.8c3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9c-11 29.5-26.8 56.9-47 81.5a295.6 295.6 0 0 1-47.5 46.1a352.6 352.6 0 0 0-100.3 121.5A347.75 347.75 0 0 0 160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0 0 75.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 0 0 760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0 0 27.7-136c0-48.8-10-96.2-29.9-140.9" />
                </svg>
            </span>
           <div> Don't miss limited-time savings: </div><strong>Savings 20%</strong>
          </div>
          
          <h1 className="hero-title">
            Everything for <br />
            Your Site to <br />
            Succeed
          </h1>
          
          <p className="hero-subtitle">Image from Freepik</p>
          
          <div className="hero-action">
            <a href="#" className="btn-get-started"> Get Started </a>
            <div className="hero-price">
              <span>Starting at only</span>
              <strong>$4.75/mo*</strong>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={heroImg} alt="Hero Section Web Graphics" className="hero-image" />
        </div>

      </div>
    </section>
  );
}

export default Hero;