import './App.css';
import companyLogo from './logo.jpg';
import React, { useState } from "react";
import { createContext} from "react";
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

export default function App() {
  const getInitialState = () => {
    const value = "BTC";
    return value;
  };

  let divisor_for_seconds = 60;
  let seconds = Math.ceil(divisor_for_seconds);

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <div className='AppSwitch' id="switch">
   <div className='nav1'>
      <img src={companyLogo} alt="Website banner"></img>
      <select>
        <option value="INR">INR</option>
      </select>
      <select value={value} onChange={handleChange}>
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
        <option value="USDT">USDT</option>
      </select>
      <button>{`Buy ${value}`}</button>
      
      <text className='circleProgressbar'>{seconds}</text>

     
      <button className='telegram'>Connect Telegram</button>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="switch">
          {/* <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label> */}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </ThemeContext.Provider>
      
      </div>
      

  <span className="subText">Best Price to trade</span>
  

    </div>
  );
}

//   );
// }


