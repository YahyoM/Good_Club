import { useContext, useState } from "react";
import { Divider, Box, FormControl, Select, MenuItem, Typography } from "@mui/material";
import {
  InfoBack,
  InfoButton,
  InfoCard,
  InfoDescription,
  InfoForm,
  InfoInput,
} from "../../static/InfoTags";
import { countrySource, towns } from "../../data/country-data";
import { toastError, toastSuccess } from "../../toast";
import { fillUser } from "../../axios/UserApi";
import { GlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";


const Information = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dateOfBirth: "",
    province: 0,
    district: "",
    workplace: "",
    userType: "TEACHER",
    gender: "MALE",
    schoolNumber: 0,
  });

  const catchChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleContinue = async (e) => {
    e.preventDefault();
    if (formData.province == 0 || !formData.district) {
      return toastError("Ma'lumot yetarli emas")
    }

    const findedProvince = countrySource.find(
      (item) => item.id === formData.province
    );
    try {
      const data = await fillUser({
        ...formData,
        province: findedProvince.value,
      });
      setUser(data.user);
      toastSuccess("Foydalanuvchi muaffaqiyatli ro'yhatdan o'tkazildi");
      navigate("/");
    } catch (error) {
      toastError(error.message);
    }
  };

  return (
    <InfoBack>
      <InfoCard>
        <Box
          sx={{
            width: "100%"
          }}
        >
          <InfoDescription>{"Shaxsiy ma'lumotlar"}</InfoDescription>
          <Typography
            sx={{
              marginTop: "6px",
              fontSize: "16px"
            }}
          >
            {"So'ngi yangilanish"} 1/12/2021
          </Typography>
        </Box>
        <Divider
          sx={{
            maxWidth: "375px",
            width: "100%",
            border: "1px solid #D9D9D9",
            margin: "30px 0px",
          }}
        />
        <InfoForm>
          <InfoInput
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={catchChange}
          />
          <InfoInput
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={catchChange}
          />

          <InfoInput
            type="number"
            placeholder="998 9_ ___ __ __"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={catchChange}
          />
          <InfoInput
            type="date"
            placeholder="Date of birth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={catchChange}
            sx={{
              color: "gray",
            }}
          />
          <FormControl
            fullWidth
            sx={{
              height: "39px",
              borderRadius: "4px",
              border: "1px solid #000",
              transition: "border-color 0.1s ease-in-out",
              padding: "0",
              fontSize: "18px",
              "&:focus": {
                border: "2px solid gray",
                outline: "none",
              },
            }}
          >
            <Select
              name="province"
              value={formData.province}
              onChange={catchChange}
              sx={{
                height: "100%",
                transition: "border-color 0.1s ease-in-out",
                fontSize: "18px",
                border: "none",
                padding: "0",
              }}
            >
              <MenuItem value={0} disabled={true}>
                Shahar
              </MenuItem>
              {countrySource.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              height: "39px",
              borderRadius: "4px",
              border: "1px solid #000",
              transition: "border-color 0.1s ease-in-out",
              padding: "0",
              fontSize: "18px",
              "&:focus": {
                border: "2px solid gray",
                outline: "none",
              },
            }}
          >
            <Select
              name="district"
              value={formData.district}
              onChange={catchChange}
              sx={{
                height: "100%",
                transition: "border-color 0.1s ease-in-out",
                fontSize: "18px",
                border: "none",
                padding: "0",
              }}
            >
              <MenuItem value={0} disabled={true}>
                Shahar / Tuman
              </MenuItem>
              {towns[formData.province] &&
                towns[formData.province].map((country, idx) => (
                  <MenuItem key={idx} value={country.value}>
                    {country.label}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <Box className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="userType"
                value="TEACHER"
                checked={formData.userType === "TEACHER"}
                onChange={catchChange}
              />
              <span className="name">{"O'qituvchi"}</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="userType"
                value="STUDENT"
                checked={formData.userType === "STUDENT"}
                onChange={catchChange}
              />
              <span className="name">Talaba</span>
            </label>

            <label className="radio">
              <input
                type="radio"
                name="userType"
                value="OTHERS"
                checked={formData.userType === "OTHERS"}
                onChange={catchChange}
              />
              <span className="name">Boshqa</span>
            </label>
          </Box>

          {formData.userType === "OTHERS" && (
            <InfoInput
              type="text"
              placeholder="Ish Joyi"
              name="workplace"
              value={formData.workplace}
              onChange={catchChange}
            />
          )}

          {formData.userType === "TEACHER" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "16px",
              }}
            >
              <input
                style={{
                  width: "70px",
                  height: "28px",
                  borderRadius: "4px",
                  border: "1px solid #000",
                  padding: "5px 10px",
                  transition: "border-color 0.1s ease-in-out",
                  fontSize: "18px",
                  "&:focus": {
                    border: "2px solid gray",
                    outline: "none",
                  },
                }}
                type="number"
                name="schoolNumber"
                value={formData.schoolNumber}
                onChange={catchChange}
              />
              <span>- sonli oʻrta umum-taʼlim maktabi</span>
            </div>
          )}

          <Box className="radio-inputs">
            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="MALE"
                checked={formData.gender === "MALE"}
                onChange={catchChange}
              />
              <span className="name">Erkak</span>
            </label>

            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="FEMALE"
                checked={formData.gender === "FEMALE"}
                onChange={catchChange}
              />
              <span className="name">Ayol</span>
            </label>
          </Box>
          <InfoButton onClick={handleContinue}>Kirish</InfoButton>
        </InfoForm>
      </InfoCard>
    </InfoBack>
  );
};

export default Information;
