export const getAuthToken = () => localStorage.getItem("authToken");
export const getUserData = () => JSON.parse(localStorage.getItem("user"));
