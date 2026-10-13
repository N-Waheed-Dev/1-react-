
import style from "./HostingPlans.module.css";
import {GoArrowRight} from "react-icons/go";
const plansData = [
  {
    id: 1,
    title: "Maximum Performance",
    description: "Sample text. Click to select the Text Element.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" />
        <path d="M19 19L17.5 17.5" />
        <path d="M19 5L17.5 6.5" />
        <path d="M5 19L6.5 17.5" />
        <path d="M5 5L6.5 6.5" />
        <path d="M2 12H4" />
        <path d="M19.9998 12L21.9998 12" />
        <path d="M12 4.00021L12 2.00021" />
        <path d="M10.1214 14.3635C8.94978 13.1919 8.94978 11.2924 10.1214 10.1209C11.2929 8.94929 13.1924 8.94929 14.364 10.1209C14.8096 10.5665 15.1209 11.4916 15.3355 12.467C15.6564 13.9255 15.8169 14.6548 15.2361 15.2356C14.6553 15.8164 13.926 15.6559 12.4675 15.335C11.4921 15.1204 10.567 14.8092 10.1214 14.3635Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Fully Secure Data Centers",
    description: "Sample text. Click to select the Text Element.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M0 0h32v32H0z" fill="none" />
        <path
          fill="currentColor"
          d="M17 2v7a3 3 0 0 0 3 3h7v15a3 3 0 0 1-3 3h-7.535c.34-.588.535-1.271.535-2v-6a4 4 0 0 0-3.08-3.894A5.002 5.002 0 0 0 5 16V5a3 3 0 0 1 3-3zm2 .117V9a1 1 0 0 0 1 1h6.883a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M20 21a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm3-5a1 1 0 0 0-1 1v8a1 1 0 1 0 2 0v-8a1 1 0 0 0-1-1M5.5 19.5V19a3.5 3.5 0 1 1 7 0v.5h.5a2.5 2.5 0 0 1 2.5 2.5v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 28v-6A2.5 2.5 0 0 1 5 19.5zm2-.5v.5h3V19a1.5 1.5 0 0 0-3 0m3.5 6a2 2 0 1 0-4 0a2 2 0 0 0 4 0"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "DDoS Attack Prevention",
    description: "Sample text. Click to select the Text Element.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M0 0h32v32H0z" fill="none" />
        <circle cx="22" cy="23.887" r="2" fill="currentColor" />
        <path
          fill="currentColor"
          d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24ZM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m3-18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v4a3 3 0 0 0-.762-1.293L20.293 2.88A3 3 0 0 0 19 2.117M4 4v4h21V4Zm8 24H4v-4h8v-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8Z"
        />
        <path
          fill="currentColor"
          d="M28 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5v-2H7v-4h21v2h2v-2a2 2 0 0 0-2-2"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Get Unmetered Bandwidth",
    description: "Sample text. Click to select the Text Element.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M0 0h24v24H0z" fill="none" stroke="none" />
        <path strokeWidth="5" d="M7 3H3v18h4" opacity=".2" />
        <path strokeWidth="5" d="M17 3h4v18h-4" opacity=".2" />
        <path strokeWidth="5" d="M12 8.5V14" opacity=".2" />
        <path strokeWidth="5" d="M9.5 11.5 12 14l2.5 -2.5" opacity=".2" />
        <path d="M7 3H3v18h4" />
        <path d="M17 3h4v18h-4" />
        <path d="M12 8.5V14" />
        <path d="M9.5 11.5 12 14l2.5 -2.5" />
      </svg>
    ),
  },
];

function HostingPlans() {
  return (
    <section className={style["plans-section"]}>
      <div className={style["plans-container"]}>
        <h1 className={style["plans-title"]}>
          Pick your perfect web hosting plan
        </h1>

        <div className={style["plans-grid"]}>
          {plansData.map((plan, index) => (
            <div
              className={style["plan-card"]}
              key={plan.id}
              style={{
                animationDelay: `${0.4 + index * 0.2}s`,
              }}
            >
              <div
                className={`${style["plan-icon-wrapper"]} animate__animated animate__zoomIn`}
              >
                {plan.icon}
              </div>

              <h3 className={style["plan-card-title"]}>
                {plan.title}
              </h3>

              <p className={style["plan-card-desc"]}>
                {plan.description}
              </p>
                      <div className={style.planArrow}>
                         <GoArrowRight />
                            </div>
                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HostingPlans;

