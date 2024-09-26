import {
  LoginCard,
  LoginBack,
  LoginDescription,
  InputCard,
  InputText,
  InputInput,
  LoginButton,
  LoginForm,
  LoginCardText,
  LoginCardTitle,
  LoginCardDesc,
  LoginCardDescRed,
} from "../../static/LoginTags";
import login from "../../assets/login.svg";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../axios/UserApi";
import { GlobalContext } from "../../context";
import { Box } from "@mui/system";
import { toastError, toastLoading, toastSuccess } from "../../toast";

const Login = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setUser } = useContext(GlobalContext);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const toastId = toastLoading("Loading....")
    try {
      const data = await signIn(formData);
      setUser(data.user);
      localStorage.setItem("accessToken", data.accessToken);
      toastSuccess("Akkauntga muaffaqiyatli kirildi", toastId)
      navigate("/terms");
    } catch (error) {
      toastError("Akkauntga kirishda xatolik", toastId)
      console.log(error.message);
    }
  };

  return (
    <LoginBack>
      <img
        style={{
          marginTop: "100px",
        }}
        width={"150px"}
        src={login}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
          width: "100%",
          marginTop: "150px",
          flexWrap: "wrap",
          maxWidth: "1340px",
          padding: "0 10px",
          backgroundColor: "#050A24"
        }}
      >
        <LoginCardText>
          <LoginCardTitle style={{}}>
            GOODCLUB CEFR platformasiga kirish uchun konvert ichiga joylangan
            login va parolni kiriting.
          </LoginCardTitle>
          <LoginCardDesc>
            {`Sizga sifatli xizmat ko'rsatishimiz va siz bilan aloqaga chiqa olishimiz uchun ro'yxatdan o'ting`}
          </LoginCardDesc>
          <LoginCardDescRed>
            {`Login va paro'l platformaga kirish uchun kalitingiz xisoblanadi. Ushbu ma'lumotlarni hech kimga ko'rsatmang`}
          </LoginCardDescRed>
        </LoginCardText>
        <LoginCard>
          <LoginDescription>Login to your account</LoginDescription>
          <LoginForm autoComplete={false}>
            <InputCard>
              <InputText>Login</InputText>
              <InputInput
               autoComplete="off"
                placeholder="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </InputCard>
            <InputCard>
              <InputText>Password</InputText>
              <InputInput
               autoComplete="off"
                type={passwordVisible ? "text" : "password"}
                placeholder="example123"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: "35px",
                  zIndex: 99,
                  right: "5px",
                }}
                onClick={togglePasswordVisibility}
                size="small"
              >
                {passwordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputCard>
            <LoginButton onClick={handleLogin}>Login now</LoginButton>
          </LoginForm>
        </LoginCard>
      </Box>
    </LoginBack>
  );
};

export default Login;
