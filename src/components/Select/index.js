/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Select = ({
  selection,
  onChange,
  name,
  titleEmpty,
  label,
  type = "normal",
}) => {
  const [value, setValue] = useState();
  const [collapsed, setCollapsed] = useState(true);
  const changeValue = (newValue) => {
    onChange();
    setValue(newValue);
    setCollapsed(newValue);
  };
  return (
    <div className={`SelectContainer ${type}`} data-testid="select-testid">
      {label && <div className="label">{label}</div>}
      <div className="Select">
        <ul>
          <li className={collapsed ? "SelectTitle--show" : "SelectTitle--hide"}>
            {value || (!titleEmpty && "Toutes")}
          </li>
          {!collapsed && (
            <>
              {!titleEmpty && (
                <li onClick={() => changeValue(null)}>
                  <input defaultChecked={!value} name="selected" type="radio" />{" "}
                  Toutes
                </li>
              )}
              {selection.map((s) => (
                <li key={s} onClick={() => changeValue(s)}>
                  <input
                    defaultChecked={value === s}
                    name="selected"
                    type="radio"
                  />{" "}
                  {s}
                </li>
              ))}
            </>
          )}
        </ul>
        <input type="hidden" value={value || ""} name={name} />
        <button
          type="button"
          data-testid="collapse-button-testid"
          className={collapsed ? "open" : "close"}
          onClick={(e) => {
            e.preventDefault();
            setCollapsed(!collapsed);
          }}
        >
          <Arrow />
        </button>
      </div>
    </div>
  );
};

const Arrow = () => (
  <svg
    width="21"
    height="11"
    viewBox="0 0 21 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2819 10.9843C10.213 10.9634 10.1408 10.9491 10.0741 10.9216C9.89304 10.8467 9.86193 10.8038 9.71304 10.6828L0.819902 1.87423C0.727682 1.76309 0.63435 1.64975 0.578794 1.5177C0.383244 1.05114 0.562128 0.462436 0.987675 0.180738C1.35211 -0.0602459 1.85877 -0.0602459 2.22321 0.180738C2.28432 0.220351 2.33542 0.272069 2.39209 0.317185L10.4997 8.34667L18.6062 0.317185L18.7751 0.180738C18.8395 0.146626 18.9006 0.107012 18.9673 0.0795026C19.4373 -0.114165 20.0284 0.057495 20.3173 0.484443C20.5606 0.845368 20.5606 1.34714 20.3173 1.70807C20.2761 1.76749 20.225 1.81921 20.1784 1.87423L11.2852 10.6828C11.2286 10.7279 11.1775 10.7796 11.1163 10.8192C10.9952 10.8996 10.8597 10.9557 10.7164 10.9843C10.5741 11.0118 10.4275 10.9975 10.2819 10.9843Z"
      fill="#5B32FF"
    />
  </svg>
);

Select.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string,
  titleEmpty: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
}

Select.defaultProps = {
  onChange: () => null,
  titleEmpty: false,
  label: "",
  type: "normal",
  name: "select",
}

export default Select;
