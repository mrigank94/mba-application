import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const fetchAllTheatres = async function () {
  try {
    const { data } = await AxiosInstance.get("/mba/api/v1/theatres");
    return data;
  } catch (ex) {
    toast.error("Error in fetching theatres");
  }
};
