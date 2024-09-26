import { styled } from "@mui/system";

export const LoginBack = styled("div")(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  backgroundColor: "#050A24",
  flexDirection: "column",
  alignItems: "center",
  justifyContent :"start",
}));


export const LoginCardText = styled("div")(() => ({
  maxWidth: "588px",
  width: "100%",
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
}));

export const LoginCardTitle = styled("p")(() => ({
  width: "100%",
  fontWeight: "300",
  fontStyle: "italic",
  fontSize: "32px",
  lineHeight: "1.3",
  color: "#fff",
}));
export const LoginCardDesc = styled("p")(() => ({
  maxWidth: "450px",
  width: "100%",
  marginTop: "20px",
  fontWeight: "400",
  fontSize: "25px",
  lineHeight: "1.3",
  color: "#fff",
  textAlign: "start"
}));
export const LoginCardDescRed = styled("p")(() => ({
  maxWidth: "350px",
  width: "100%",
  marginTop: "20px",
  fontWeight: "300",
  fontSize: "12px",
  lineHeight: "1.1",
  color: "#FF0000",
}));

export const LoginCard = styled("div")(() => ({
  maxWidth: "540px",
  width: "100%",
  borderRadius: "20px",
  padding: "48px 72px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  "@media(max-width: 600px)": {
    margin: '0 5px',
    padding: '30px 20px',
  }
}));
export const LoginForm = styled("form")(() => ({
  maxWidth: "396px",
  width: "100%",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  gap: "24px"
}));


export const LoginDescription = styled("p")(() => ({
  fontWeight: "600",
  fontSize: "28px",
  lineHeight: "28px",
  height: "55px"
}));

export const InputCard = styled("div")(() => ({
  width: "100%",
  height: "76px",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  flexDirection: "column",
  position: "relative"
}));

export const InputText = styled("p")(() => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "16px"
}));

export const InputInput = styled("input")(() => ({
  boxSizing: "border-box",
  width: "100%",
  height: "48px",
  borderRadius: "8px",
  padding: "5px 10px",
  border: "1px solid #D0D5DD",
  transition: "border-color 0.3s ease-in-out",
  fontSize: "18px",
  "&:focus": {
    border: "3px solid #D1E9FF",
    outline: "none",
  },
}));

export const LoginButton = styled("button")(() => ({
  width: "100%",
  height: "52px",
  color: "#ffffff",
  backgroundColor: "#1570EF",
  borderRadius: "8px",
  border: "0px",
  fontSize: "20px",
  fontWeight: "bold"
}));





