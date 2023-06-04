import "./index.scss";
import React from "react";
import logo from "../images/Logo.svg";
import { ReactComponent as TurnLight } from "../images/TurnLight.svg";

import { Input } from "fwt-internship-uikit";
import Selector from "../../UI/Selector/Selector";
import useTheme from "../../hooks/useTheme";
import cn from "classnames";

function Header({
  authors,
  chooseAuthor,
  searchQuery,
  searching,
  locations,
  chooseLocations,
  searchingOfFirstDate,
  searchingOfLastDate,
  firstNum,
  lastNum,
  currentAuthor,
  currentLocation,
  created,
  setDefaultValue,
  defaultAuthor,
  defaultLocation,
  setDefaultAuthor,
  setDefaultLocation,
}) {
  const flag = true;

  const { isLight, setIsLight } = useTheme();

  return (
    <div className="header">
      <div className="logo">
        <div className="logo__image">
          <img src={logo} alt="" />
        </div>
        <div className="swicher">
          <TurnLight
            className={cn("turn_light", { light: isLight })}
            onClick={() => setIsLight(!isLight)}
          />
        </div>
      </div>
      <nav className="navigation">
        <Input
          className={cn("", { light: isLight })}
          onChange={(e) => searching(e.target.value)}
          placeholder="Name"
          value={searchQuery}
        />
        <Selector
          currentOption={currentAuthor}
          arrayOptions={authors}
          chousenOption={chooseAuthor}
          setDefaultValue={setDefaultValue}
          defaultValue={setDefaultAuthor}
          defaultVal={defaultAuthor}
        />
        <Selector
          currentOption={currentLocation}
          arrayOptions={locations}
          chousenOption={chooseLocations}
          defaultValue={setDefaultLocation}
          setDefaultValue={setDefaultValue}
          defaultVal={defaultLocation}
        />
        <Selector
          currentOption={created}
          searchingOfFirstDate={searchingOfFirstDate}
          searchingOfLastDate={searchingOfLastDate}
          firstNum={firstNum}
          lastNum={lastNum}
          flag={flag}
        />
      </nav>
    </div>
  );
}

export default Header;
