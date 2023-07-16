import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const fetchAllMovies = async function () {
  try {
    const { data } = await AxiosInstance.get("/mba/api/v1/movies");
    return data;
  } catch (ex) {
    toast.error("Error in fetching movies");
  }
};
