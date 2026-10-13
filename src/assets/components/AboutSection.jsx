
import style from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={style.aboutSection}>
      <div className={style.aboutContainer}>
        <div className={`${style.aboutCard} ${style.orangeCard}`}>
          <h2 className={style.cardTitle}>20+ Years Experience</h2>

          <p className={style.cardDescription}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit
          </p>

          <a href="#get-started" className={style.btnLight}>
            Get Started
          </a>
        </div>

        <div className={`${style.aboutCard} ${style.blueCard}`}>
          <div className={style.blueCardContent}>
            <h2 className={style.cardTitle}>Who We Are</h2>

            <p className={style.cardDescription}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit
            </p>

            <a href="#get-started" className={style.btnLight}>
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

