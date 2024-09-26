import { styled } from "@mui/system";

export const HomeCard = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0 10px",
  maxWidth: "738px",
  width: "100%",
  backgroundColor: "#ffffff",
  margin: "20px 50px 0px",
  boxSizing: "border-box",
  minWidth: "350px",
  '@media (max-width: 800px)': {
    margin: "0",
  }
}));

export const StyledVideo = styled("video")(() => ({
  width: "100%",
  borderTopRightRadius: "12px",
  borderTopLeftRadius: "12px",
}));

export const VideoContainer = styled("div")(() => ({
  maxWidth: "100%",
  maxHeight: "100%",
  borderTopRightRadius: "12px",
  borderTopLeftRadius: "12px",
  overflowY: "auto",
}));

export const VideoTitleBox = styled("div")(() => ({
  width: "100%",
  maxHeight: "80px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "",
  padding: "20px",
  boxSizing: "border-box",
}));

export const VideoTitle = styled("h1")(() => ({
  width: "100%",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "24px",
  fontFamily: "sans-serif",
}));

export const VideoName = styled("p")(() => ({
  width: "100%",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "20px",
  fontFamily: "sans-serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "0 5px"
}));

export const VideoNav = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  height: "30px",
  borderBottom: "1px solid #F6F6F6",
  gap: "0 30px",
}));

export const VideoNavButton = styled("button")(({ btn }) => ({
  maxWidth: "122px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "30px",
  borderTop: "0px",
  borderRight: "0px",
  borderLeft: "0px",
  borderBottom: btn ? "3px solid" : "0px",
  fontWeight: btn ? "bold" : "",
  // color: btn ? "#000" : "gray",
}));

export const AssignCard = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  border: "1px solid",
  borderRadius: "12px",
  padding: "20px",
  gap: "10px",
}));

export const AssignCardText = styled("h2")(() => ({
  fontWeight: "700",
  fontSize: "14px",
  lineHeight: "17px"
}));
export const AssignCardSubText = styled("p")(() => ({
  fontWeight: "500",
  color: "#92929C",
  fontSize: "14px",
  lineHeight: "17px",
}));

