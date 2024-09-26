import { Box } from "@mui/system";
import { Suspense, useContext, useEffect, useState } from "react";
import Loader from "./components/loader";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Information from "./pages/info";
import Login from "./pages/login";
import Terms from "./pages/terms";
import PrivateRoute from "./routes/PrivateRoute";
import { refreshUser } from "./axios/UserApi";
import { GlobalContext } from "./context";
import Header from "./components/header";
import Sertificate from "./pages/sertificate";

function App() {
  const { setUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
 

  const fetchUserData = async () => {
    try {
      const user = await refreshUser();
      localStorage.setItem("accessToken", user.accessToken);
      setUser(user.user);
    } catch (error) {
      localStorage.removeItem("accessToken");
      navigate("/login");
    } finally {
      setLoading(false);
    }
    
  };

  useEffect(() => {
    fetchUserData();
    
  }, []);

  if (loading) {
    return null;
  }
  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <Loader />
          </Box>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isPrivateRoute={true}>
                <Header />
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/sertificate"
            element={
              <PrivateRoute isPrivateRoute={true}>
                <Sertificate />
              </PrivateRoute>
            }
          />
          <Route
            path="/personal-information"
            element={
              <PrivateRoute isPublicRoute={true}>
                <Information />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={
            <PrivateRoute isPublicRoute={true}>
              <Terms />
            </PrivateRoute>
          } />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
