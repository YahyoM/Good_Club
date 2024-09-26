import { fontFamily, styled } from "@mui/system";

export const InfoBack = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "#050A24",
}));

export const InfoCard = styled("div")(() => ({
    maxWidth: "701px",
    width: "100%",
    borderRadius: "20px",
    padding: "48px 163px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    "@media(max-width: 600px)": {
      padding: "20px"
    }
  }));

  export const InfoDescription = styled("p")(() => ({
    fontWeight: "700",
    fontSize: "32px",
    lineHeight: "37.5px",
    color: "#494949",
  }));

  export const SubInfoDescription = styled("p")(() => ({
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19.2px",
    color: "#7C7C7C",
  }));

  export const InfoForm = styled("form")(() => ({
   maxWidth: "355px",
   width: "100%",
   display: "flex",
   alignItems: "center",
   flexDirection: "column",
   gap: "16px"
  }));

  export const InfoInput = styled("input")(() => ({
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #000",
    padding: "13px 16px",
    transition: "border-color 0.1s ease-in-out", 
    fontSize: "16px",
    "&:focus": {
      border: "2px solid gray", 
      outline: "none",
    },
  }));

  export const InfoButton = styled("button")(() => ({
   width: "100%",
   height: "48px",
   borderRadius: "4px",
   color: "#ffffff",
   backgroundColor: "#000",
   border: "0px",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   padding: "0px 10px",
   fontWeight: "bold"
  }));



  

 



  