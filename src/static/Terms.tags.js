import { styled } from "@mui/system";

export const TermsBack = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#050A24",
}));

export const TermsCard = styled("div")(() => ({
  maxWidth: "700px",
  width: "100%",
  height: "654px",
  borderRadius: "20px",
  padding: "48px 72px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  gap: "0 20px",

  "@media(max-width: 600px)": {
    padding: "40px 20px"
  }
}));

export const TermsDescription = styled("p")(() => ({
  fontWeight: "700",
  fontSize: "15px",
  color: "#494949",
  textAlign: "center"
}));

export const SubTermsDescription = styled("p")(() => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19.2px",
  color: "#7C7C7C",
  textAlign: "center"
}));

export const TermsTextBox = styled("div")(() => ({
  maxWidth: "622px",
  width: "100%",
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px"
}));

export const TermsTextScroll = styled("div")(() => ({
  overflowY: "scroll",
}));

export const TermsText = styled("p")(() => ({
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#494949",
}));

export const SubTermsText = styled("p")(() => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#494949",
}));

export const SubTermsButton = styled("button")(() => ({
    width: "max-content",
    borderRadius: "100px",
    borderWidth: 0,
    color: "#383699",
    backgroundColor: "#4296E4",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "13px 15px",
    fontSize: "18px",
    // color: "#ffffff"
  }));


