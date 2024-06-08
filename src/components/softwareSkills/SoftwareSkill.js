import {React} from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  // const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement="bottom"
                // onHover={() => inputRef.current?.focus({ preventScroll : true })}
                overlay={
                  <Tooltip id="icon-tooltip">
                    {logo.skillName}
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
