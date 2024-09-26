/* eslint-disable react/prop-types */

import { BACKEND_URL } from "../../axios";
import {
  SidCard,
  SidDescription,
  SidIcon,
  SidSubStatus,
  SidTextBox,
} from "../../static/SidebarTags";
import { LinearProgress } from "@mui/material";
import { GlobalContext } from "../../context";
import { useContext } from "react";

function secondsToTime(e) {
  const h = Math.floor(e / 3600)
      .toString()
      .padStart(2, "0"),
    m = Math.floor((e % 3600) / 60)
      .toString()
      .padStart(2, "0"),
    s = Math.floor(e % 60)
      .toString()
      .padStart(2, "0");

  return h + ":" + m + ":" + s;
}

function SidebarCard({ item, onClick, index }) {
  const normalise = (value, min1, max1, min2, max2) =>
    ((value - min1) * (max2 - min2)) / (max1 - min1) + min2;
  console.log(item);
  const data = item.lesson;
  const { darkmode } = useContext(GlobalContext);

  const getOpacityOfSidCard = () => {
    if (item.lesson.isAlwaysOpened) {
      return "1";
    }
    if (item.status === "LOCKED") {
      return "0.5";
    }
    if (item.status === "COMPLETED") {
      return "0.5";
    }
    return "1";
  };

  return (
    <SidCard
      onClick={() => onClick(item, index)}
      sx={{
        opacity: getOpacityOfSidCard,
      }}
    >
      <SidIcon>
        <img
          width={"70px"}
          height={"90px"}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
          }}
          src={BACKEND_URL + data.image}
          alt="Card Image"
        />
      </SidIcon>
      <SidTextBox>
        <SidDescription
          sx={{
            color: darkmode !== "dark" ? "#1F2029" : "#fff",
          }}
        >
          {data.title}
        </SidDescription>
        <LinearProgress
          sx={{
            color: "blue",
            height: "6px",
            width: "100%",
            margin: "2px 0",
            borderRadius: "20px",
          }}
          variant="determinate"
          value={normalise(100, 0, 100, 0, 90)}
        />
        <SidSubStatus>
          {item.status}{" "}
          <span
            style={{
              marginLeft: "auto",
            }}
          >
            {secondsToTime(data.duration)}
          </span>
        </SidSubStatus>
      </SidTextBox>
    </SidCard>
  );
}

export default SidebarCard;
