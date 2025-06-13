import { DropDownProps } from "@/types/interfaces";
import "./DropDown.scss";

export const DropDown = ({ options, onChange, placeholder }: DropDownProps) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {placeholder}
      </button>
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>
            <a
              className="dropdown-item"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onChange(option);
              }}
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
