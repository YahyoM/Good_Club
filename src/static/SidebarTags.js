import { styled } from "@mui/system";


export const SidCard = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "0 10px",

  width: "300px",
  marginTop: "20px",
  margin: "20px auto 0px",
  cursor: "pointer"
}));

export const SidIcon = styled("div")(() => ({
  width: "70px",
  height: "90px",
  borderRadius: "12px",
}));

export const SidTextBox = styled("div")(() => ({
  maxWidth: "178px",
  width: "100%",
  height: "90px",
  display: "flex",
  alignItems: "start",
  justifyContent: 'space-between',
  flexDirection: "column",
}));

export const SidDescription = styled("p")(() => ({
  width: "100%",
  fontWeight: "bold",
  fontSize: "16px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  whiteSpace: "normal",
  margin: 0
}));

export const SidSubStatus = styled("p")(() => ({
  maxWidth: "160px",
  width: "100%",
  color: "#7B8392",
  fontWeight: "medium",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  gap: "10px",
  margin: '0'
}));
