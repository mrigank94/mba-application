import { AxiosInstance } from "../util/axiosInstance";

export const signIn = async function (userId, password) {
  const response = await AxiosInstance.post("/mba/api/v1/auth/signin", {
    userId: userId,
    password: password,
  });

  const data = response.data;
  if (!data.userId && data.message) {
    throw new Error("APPROVAL PENDING");
  }
  localStorage.setItem("name", data.name);
  localStorage.setItem("userId", data.userId);
  localStorage.setItem("email", data.email);
  localStorage.setItem("userTypes", data.userTypes);
  localStorage.setItem("userStatus", data.userStatus);
  localStorage.setItem("token", data.accessToken);

  return response.data;
};
