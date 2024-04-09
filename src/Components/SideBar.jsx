import home from "../assets/Rectangle 74.svg";
import timer from "../assets/Timer.svg";
import chart from "../assets/Chart.svg";
import rocket from "../assets/Rocket.svg";
import layers from "../assets/Layers.svg";
import settings from "../assets/Settings.svg";
import logout from "../assets/Logout.svg";

export default function SideBar() {
  return (
    <div className="sidebar-outer">
      <div className="sidebar-closing-button">
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.389 13.2222L15.8709 17.4176C15.1608 18.077 15.1608 19.2009 15.8709 19.8602L20.389 24.0556M18.2223 1.88892C9.01759 1.88892 1.55566 9.35084 1.55566 18.5556C1.55566 27.7603 9.01759 35.2222 18.2223 35.2222C27.4271 35.2222 34.889 27.7603 34.889 18.5556C34.889 9.35084 27.4271 1.88892 18.2223 1.88892Z"
            stroke="#FEFEFE"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="title">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.88916 9.40741V28.963C1.88916 29.6807 2.32069 30.328 2.98318 30.604L19.6669 37.5556M1.88916 9.40741L18.2994 2.5698C19.1746 2.20513 20.1592 2.20513 21.0345 2.5698L28.5558 5.7037M1.88916 9.40741L10.778 13.1111M19.6669 16.8148V37.5556M19.6669 16.8148L37.4447 9.40741M19.6669 16.8148L10.778 13.1111M19.6669 37.5556L36.3507 30.604C37.0132 30.328 37.4447 29.6807 37.4447 28.963V9.40741M37.4447 9.40741L28.5558 5.7037M10.778 13.1111L28.5558 5.7037"
            stroke="#FEFEFE"
            stroke-width="2.66667"
            stroke-linejoin="round"
          />
        </svg>
        Catalix
      </div>
      <div className="xyz">
      <div className="sidebar-button-list">
        <div className="button-container">
          <img src={home}></img>
          <div className="button">Home</div>
        </div>
        <div className="button-container">
          <img src={timer}></img>
          <div className="button">Activities</div>
        </div>
        <div className="button-container">
          <img src={chart}></img>
          <div className="button">Analytics</div>
        </div>
        <div className="button-container">
          <img src={rocket}></img>
          <div className="button">Transformation</div>
        </div>
        <div className="button-container last">
          <img src={layers}></img>
          <div className="button">Library</div>
        </div>
      </div>

      <div className="sidebar-button-list bottomB">
        <div className="button-container">
          <img src={settings}></img>
          <div className="button">Settings</div>
        </div>
        <div className="button-container">
          <img src={logout}></img>
          <div className="button">Logout</div>
        </div>
      </div>
      </div>
      
    </div>
  );
}
