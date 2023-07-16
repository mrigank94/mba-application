import { toast } from "react-toastify";
import { AxiosInstance } from "../util/axiosInstance";

export const fetchAllBookings = async function () {
  try {
    const { data } = await AxiosInstance.get("/mba/api/v1/bookings");
    return data;
  } catch (ex) {
    toast.error("Error in fetching bookings");
  }
};
