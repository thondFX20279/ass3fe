import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Avatar = (props) => {
  return (
    <div style={{ textAlign: "center", height: "40px", position: "fixed", right: "50px", bottom: "50px", width: "300px" }}>
      <span onClick={props.onClick} style={{ display: "inline-block" }}>
        <FontAwesomeIcon style={{ width: "40px", height: "40px", color: "blue" }} icon={faFacebookMessenger} />
      </span>
    </div>
  );
};

export default Avatar;
