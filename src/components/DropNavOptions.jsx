import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropNavOptions.module.css";
import { DropdownButton } from "react-bootstrap";

const DropNavOptions = ({ title, options }) => {
  return (
    <DropdownButton
      className={styles["dropdown-button"]}
      title={title}
      variant="custom"
    >
      {options.map((option, i) => (
        <Dropdown.Item eventKey={`${option.id}-${i}`}>
          {option.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default DropNavOptions;
