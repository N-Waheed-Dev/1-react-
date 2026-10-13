
import style from "./SupportSection.module.css";
import supportImg from "../pages/support-img.png";

function SupportSection() {
  return (
    <section className={style.supportSection}>
      <div className={style.supportContainer}>

        <div className={style.supportImageWrapper}>
          <img
            src={supportImg}
            alt="24/7/365 Support Illustration"
            className={style.supportImage}
          />
        </div>

        <div className={style.supportContent}>
          <h2 className={style.supportTitle}>
            24/7/365 Support
          </h2>

          <p className={style.supportText}>
            Sample text. Click to select the Text Element. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          <p className={style.supportAttribution}>
            Image from Freepik
          </p>

          <a href="#get-started" className={style.btnSupport}>
            Get Started
          </a>
        </div>

      </div>
    </section>
  );
}

export default SupportSection;
