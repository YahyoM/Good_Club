import { useContext, useEffect, useState } from "react";
import VideoPlayer from "../../components/video";
import {
  AssignCard,
  AssignCardSubText,
  AssignCardText,
  HomeCard,
  VideoName,
  VideoNav,
  VideoNavButton,
  VideoTitle,
  VideoTitleBox,
} from "../../static/HomeTags";
import { Box } from "@mui/system";
import { v4 } from "uuid";
import { GlobalContext } from "../../context";
import { getLessons } from "../../axios/UserApi";
import { toastError, toastSuccess } from "../../toast";
import Sidebar from "../../components/sidebar";
import { completeCurrentLesson, getCurrentLesson } from "../../axios/LessonApi";
import ConfirmModal from "../../components/modal";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { typeOfClass, setTypeOfClass } = useContext(GlobalContext);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stepOfModal, setStepOfModal] = useState(false);
  const { darkmode } = useContext(GlobalContext);
  const navigate = useNavigate();

  const checkIsAllLessonIsCompleted = () => lessons?.every(item => item.status === "COMPLETED");
  const isAllLessonCompleted = checkIsAllLessonIsCompleted();

  const fetchData = async () => {
    try {
      const data = await getLessons();
      
      const current = data.find(lesson => lesson.status === "UNLOCKED");
      setCurrentLesson(current);
      setLessons(data);

    } catch (error) {
      toastError(error.message);
    } finally {
      setLoading(false);
    }
  };

  

  const completeLesson = async () => {
    try {
      if (currentLesson) {
        await completeCurrentLesson(currentLesson.lesson.id);
        await fetchData();
        setStepOfModal(0);
        toastSuccess("Next lesson is unlocked");
      }
    } catch (e) {
      toastError(e.message);
    }
  };

  const handleChange = (step) => {
    setTypeOfClass(step);
  };

  const handleOnClickItem = async (clickedLesson, clickedIndex) => {
    let currentIndex = lessons.findIndex(
      (item) => item.lesson?.id == currentLesson.lesson.id
    );

    if (clickedLesson.status === "UNLOCKED") {
      setCurrentLesson(clickedLesson);
      toastSuccess("Lesson is unlocked");
      return;
    }

    if (
      clickedLesson.lesson.isAlwaysOpened &&
      clickedLesson.status === "COMPLETED"
    ) {
      setCurrentLesson(clickedLesson);
      toastSuccess("Lesson is unlocked");
      return;
    }

    if (clickedIndex === currentIndex + 1) {
      const currentLesson = lessons?.[currentIndex];
      if (currentLesson) {
        setStepOfModal(1);
      }
    } else if (
      clickedIndex === lessons.length - 1 &&
      currentIndex === clickedIndex
    ) {
      setStepOfModal(1);
    } else {
      toastError("Video ketma-ketligiga rioya qiling!");
    }
  };

  const finishLesson = () => {
    setStepOfModal(1);
  }

  const navigateToSertificatePage = () => {
    navigate("/sertificate", {});
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <>
      <ConfirmModal
        step={stepOfModal}
        onClickNext={() => setStepOfModal(2)}
        onClose={() => setStepOfModal(0)}
        onClick={completeLesson}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column-reverse",
            sm: "row",
          },
          alignItems: {
            xs: "center",
            sm: "start",
          },
          maxWidth: "1440px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Sidebar finishLesson={finishLesson} currentLesson={currentLesson} onClickItem={handleOnClickItem} lessons={lessons} />
        <Box
          sx={{
            height: {
              xs: "min-content",
              md: "calc(100vh - 81px)",
            },
            overflowY: "scroll",
            width: "100%",
          }}
        >
          {isAllLessonCompleted ? (
            <Box
              sx={{
                margin: "20px 20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter",
                }}
              >
                Siz barcha darslarni muvaffaqiyatli yakunladingiz! Sertifikatni
                ochish uchun quyidagi tugmani bosing.
              </Typography>
              <Button
                onClick={navigateToSertificatePage}
                sx={{
                  marginTop: "20px",
                }}
                variant="contained"
              >
                Sertifikat olish
              </Button>
            </Box>
          ) : (
            <HomeCard>
              <VideoPlayer data={currentLesson.lesson} />
              <VideoTitleBox
                sx={{
                  backgroundColor: darkmode === "dark" ? "#1F2029" : "",
                }}
              >
                <Box>
                  <VideoTitle
                    sx={{
                      color: darkmode === "dark" ? "#fff" : "#1C1C24",
                    }}
                  >
                    {currentLesson.lesson.title}
                  </VideoTitle>
                  <VideoName
                    sx={{
                      color: darkmode !== "dark" ? "#696974" : "#fff",
                    }}
                  >
                    {currentLesson.lesson.author}{" "}
                    <Box
                      sx={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#bbb",
                      }}
                    ></Box>{" "}
                    <span
                      style={{
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#7B8392",
                      }}
                    >
                      {" "}
                      {currentLesson.lesson.qualification}
                    </span>
                  </VideoName>
                </Box>
              </VideoTitleBox>
              <VideoNav>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    height: "30px",
                    borderBottom: "1px solid #F6F6F6",
                    gap: "0 30px",
                    backgroundColor: darkmode === "dark" ? "#1F2029" : "",
                  }}
                >
                  <VideoNavButton
                    sx={{
                      backgroundColor: darkmode === "dark" ? "#1F2029" : "#fff",
                      borderBottomColor: darkmode === "dark" ? "#fff" : "#1F2029",
                      color:
                        darkmode === "dark" && typeOfClass === 1
                          ? "#fff"
                          : "#92929C",
                    }}
                    btn={typeOfClass === 1}
                    onClick={() => handleChange(1)}
                  >
                    Class Detail
                  </VideoNavButton>
                  <VideoNavButton
                    sx={{
                      backgroundColor: darkmode === "dark" ? "#1F2029" : "#fff",
                      borderBottomColor:
                        darkmode === "dark" ? "#fff" : "#1F2029",
                      color:
                        darkmode === "dark" && typeOfClass === 2
                          ? "#fff"
                          : "#92929C",
                    }}
                    btn={typeOfClass === 2}
                    onClick={() => handleChange(2)}
                  >
                    Assignment
                  </VideoNavButton>
                  <VideoNavButton
                    sx={{
                      display: {
                        xs: "flex",
                        sm: "none",
                      },
                      backgroundColor: darkmode === "dark" ? "#1F2029" : "#fff",
                      borderBottomColor:
                        darkmode === "dark" ? "#fff" : "#1F2029",
                      color:
                        darkmode === "dark" && typeOfClass === 3
                          ? "#fff"
                          : "#92929C",
                    }}
                    btn={typeOfClass === 3}
                    onClick={() => handleChange(3)}
                  >
                    Lessons
                  </VideoNavButton>
                </Box>
              </VideoNav>
              {typeOfClass === 2 && (
                <Box
                  sx={{
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxSizing: "border-box",
                    backgroundColor:
                        darkmode !== "dark" ? "#FAFAFB" : "#292932",
                  }}
                >
                  {currentLesson.lesson?.assignments?.map((item, idx) => (
                    <AssignCard key={v4()}>
                      <AssignCardText>
                        {`${idx + 1}.`} {item.title}
                      </AssignCardText>
                      <AssignCardSubText>{item.description}</AssignCardSubText>
                    </AssignCard>
                  ))}
                </Box>
              )}
              {typeOfClass === 1 && (
                <Box
                  sx={{
                    width: "100%",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    boxSizing: "border-box",
                    backgroundColor:
                        darkmode !== "dark" ? "#FAFAFB" : "#292932",
                  }}
                >
                  <AssignCard 
                    sx={{
                      backgroundColor:
                        darkmode !== "dark" ? "#FAFAFB" : "#292932",
                      borderColor: darkmode !== "dark" ? "#F1F1F5" : "#3E3E3E"
                    }}
                  key={v4()}>
                    <AssignCardSubText>
                      {currentLesson.lesson.description}
                    </AssignCardSubText>
                  </AssignCard>
                </Box>
              )}
            </HomeCard>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;
