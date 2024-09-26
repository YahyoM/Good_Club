import $host from ".";


export const completeCurrentLesson = async (lessonId) => {
    const { data } = await $host.post(`/lesson/complete/${lessonId}/`);
    return data;
};
  

export const getCurrentLesson = async () => {
    const { data } = await $host.get("/lesson/current-lesson");
    return data;
}