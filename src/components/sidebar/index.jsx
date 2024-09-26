/* eslint-disable react/prop-types */
import { Box } from "@mui/system";
import SidebarCard from "../sidcard";
import { v4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";

const Sidebar = ({ lessons, onClickItem }) => {
  const {darkmode} = useContext(GlobalContext);
  const { typeOfClass } = useContext(GlobalContext);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  );


  useEffect(() => {
    const onWindowChange = (e) => setMatches(e.matches);
    window
      .matchMedia("(min-width: 600px)")
      .addEventListener("change", onWindowChange);

    return () => {
      window.removeEventListener("change", onWindowChange);
    };
  }, []);

  return (
    <Box
      sx={{
        display: matches || typeOfClass === 3 ? "block" : "none",
        height: "calc(100vh - 81px)",
        backgroundColor: (darkmode !== "dark") ? "#ffffff" : "#1C1C24",
        padding: "20px",
        overflowY: "scroll"
      }}
    >
      <p
        style={{
          fontWeight: "700",
          fontSize: "20px",
          color: (darkmode === "dark") ? "#fff" : "#000",
        }}
      >
        My Videos
      </p>
      <p
        style={{
          fontWeight: "500",
          fontSize: "12px",
          textAlign: "center",
          color: "#007AFF",
        }}
      >
       {lessons?.length} Videos
      </p>
      {lessons?.map((item, idx) => (
        <SidebarCard index={idx} onClick={onClickItem} item={item} key={v4()} />
      ))}
      {/* {currentLesson?.id === lessons?.at(-1)?.id && (
        <Button
          variant="contained"
          sx={{
            marginTop: "15px"
          }}
          onClick={finishLesson}
        >
          Tamomlash
        </Button>
      )} */}
    </Box>
  );
};

export default Sidebar;
