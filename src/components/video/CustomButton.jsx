/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ControlBar, Player, BigPlayButton } from "video-react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaCog } from "react-icons/fa";
import { BACKEND_URL } from "../../axios";

const QualityDropdown = ({ setPlayerSource, data, playerRef }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [quality, setQuality] = useState("720p");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleQualityChange = (qualityParam) => {
    const currentTime = playerRef.current.getState().player.currentTime;
    if (qualityParam === "360p") {
      setPlayerSource(BACKEND_URL + data.video360p);
      setQuality("360p");
    } else if (qualityParam === "720p") {
      setPlayerSource(BACKEND_URL + data.video720p);
      setQuality("720p");
    }
    setTimeout(() => {
      playerRef.current.seek(currentTime);
    }, 100);
  }

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggleDropdown}
      className="video-quality-dropdown"
    >
      <DropdownToggle caret>
        <FaCog color="white" size={15} />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem 
          style={{
            backgroundColor: quality === "360p" ? "#000" : ""
          }}
          onClick={() => handleQualityChange("360p")}
          >
          360p
        </DropdownItem>
        <DropdownItem 
          onClick={() => handleQualityChange("720p")}
          style={{
            backgroundColor: quality === "720p" ? "#000" : ""
          }}
          >
          720p
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const CustomPlayer = ({ playerSource, setPlayerSource, data }) => {
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    if (playerRef.current) {
      playerRef.current.load();
    }
  }, [playerSource]);

  return (
    <Player ref={playerRef} src={playerSource}>
      <BigPlayButton position="center" />
      <ControlBar autoHide={false}>
        <QualityDropdown playerRef={playerRef} setPlayerSource={setPlayerSource} data={data} />
      </ControlBar>
    </Player>
  );
};

export default CustomPlayer;
