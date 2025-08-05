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
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropNavOptions;
