/* eslint-disable react/prop-types */
import { Modal, Typography, Box, Button } from "@mui/material";
import { useContext } from "react";
import { GlobalContext } from "../../context";



const ConfirmModal = ({ step, onClick, onClose, onClickNext }) => {
  const {darkmode} = useContext(GlobalContext);
  return (
    <>
      <Modal
        open={step === 1}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "25px",
            width: 400,
            bgcolor: darkmode !== "dark" ? "#ffffff" : "#292932",
            p: "20px 30px",
            maxWidth: "521px",
        }}>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "Inter",
              fontWeight: 700,
              color: darkmode === "dark" ? "#fff" : "#292932"
            }}
            variant="h5"
            component="h2"
          >
            Diqqat!
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              color: "#930000",
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            Ushbu darsni to'liq o'zlashtirganingizga ishonchingiz komilmi?
            Haqiqattan ham keyingi darsga o'tishni hohlaysizmi?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "14px",
                padding: "4px 20px",
              }}
              variant="outlined"
              onClick={onClose}
            >
              Bekor qilish
            </Button>
            <Button
              sx={{
                borderRadius: "14px",
                padding: "4px 20px",
              }}
              variant="contained"
              onClick={onClickNext}
            >
              Ha
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={step === 2}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "25px",
          width: 400,
          bgcolor: darkmode !== "dark" ? "#ffffff" : "#292932",
          p: "20px 30px",
          maxWidth: "521px",
        }}>
          <Typography
            sx={{
              fontSize: "17px",
              fontFamily: "Inter",
              fontWeight: 700,
              color: darkmode === "dark" ? "#fff" : "#292932"
            }}
            variant="h5"
            component="h2"
          >
            Diqqat
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              color: "#930000",
              fontFamily: "Inter",
              fontWeight: 600,
            }}
          >
            Yangi darsni ochganingizdan so'ng avvalgi dars bloklanadi
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "14px",
                padding: "4px 20px",
              }}
              variant="outlined"
              onClick={onClose}
            >
              Bekor qilish
            </Button>
            <Button
              sx={{
                borderRadius: "14px",
                padding: "4px 20px",
              }}
              variant="contained"
              onClick={onClick}
            >
              Roziman
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ConfirmModal;
