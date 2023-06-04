import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../../components/images/arrow_down.svg";
import { ReactComponent as Close } from "../../components/images/Close.svg";
import "./style.scss";
import { Input } from "fwt-internship-uikit";
import cn from "classnames";
import useTheme from "../../hooks/useTheme";

const Selector = ({
  chousenOption,
  currentOption,
  searchingOfFirstDate,
  searchingOfLastDate,
  firstNum,
  lastNum,
  defaultValue,
  arrayOptions,
  flag,
  defaultVal,
}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {}, []);

  function OpenModal() {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  }

  const { isLight } = useTheme();

  return (
    <div
      className={cn(
        "",
        { light: isLight },
        active ? "select open_select" : "select"
      )}>
      <p>{currentOption}</p>
      <div
        className={cn(
          "",
          { light: isLight },
          active
            ? "Select__optionContainer open_container"
            : "Select__optionContainer"
        )}>
        {arrayOptions ? (
          <ul>
            {arrayOptions.map((el) => (
              <li
                key={el.id}
                onClick={() =>
                  chousenOption(el.id, el.name, el.location) + setActive(false)
                }>
                {el.name}
                {el.location}
              </li>
            ))}
          </ul>
        ) : (
          <div className={cn("Input__Option", { light: isLight })}>
            <Input
              onChange={(e) => searchingOfFirstDate(e.target.value)}
              placeholder="up"
              value={firstNum}
            />
            <div className="line"></div>
            <Input
              onChange={(e) => searchingOfLastDate(e.target.value)}
              placeholder="to"
              value={lastNum}
            />
          </div>
        )}
      </div>
      {flag ? (
        <>
          <ArrowDown className="arrow" alt="#" onClick={OpenModal} />
        </>
      ) : currentOption !== defaultVal ? (
        <>
          <Close className="close_btn" alt="#" onClick={() => defaultValue()} />

          <ArrowDown className="arrow" alt="#" onClick={OpenModal} />
        </>
      ) : (
        <ArrowDown className="arrow" alt="#" onClick={OpenModal} />
      )}
    </div>
  );
};

export default Selector;
