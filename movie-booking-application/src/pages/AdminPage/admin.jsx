import { cilBarcode, cilMovie, cilPeople, cilVideo } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CWidgetStatsD } from "@coreui/react";
import MaterialTable from "@material-table/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchAllBookings } from "../../api/booking";
import { fetchAllMovies } from "../../api/movie";
import { fetchAllTheatres } from "../../api/theatre";
import { fetchAllUsers } from "../../api/user";
import Navbar from "../../components/Navbar";

const Admin = () => {
  const [selectedItem, setSelectedItem] = useState("movies");
  const [movieList, setMovieList] = useState([]);
  const [theaterList, setTheaterList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [bookingList, setBookingList] = useState([]);

  async function fetchMovies() {
    const movies = await fetchAllMovies();
    setMovieList(movies);
  }

  async function fetchTheaters() {
    const theatres = await fetchAllTheatres();
    setTheaterList(theatres);
  }

  async function fetchUsers() {
    const users = await fetchAllUsers();
    setUserList(users);
  }

  async function fetchBookings() {
    const bookings = await fetchAllBookings();
    setBookingList(bookings);
  }

  useEffect(() => {
    fetchMovies();
    fetchTheaters();
    fetchUsers();
    fetchBookings();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container bg-light">
        <h3 className="text-center mt-2">Welcome, Admin!</h3>
        <p className="text-center text-secondary">
          Take a quick look at the stats below
        </p>
        <div className="row mt-3 mb-4">
          <div className="col">
            <CWidgetStatsD
              className="mb-3"
              icon={<CIcon className="my-4" icon={cilMovie} height={52} />}
              style={{ "--cui-card-cap-bg": "#00aced" }}
              values={[{ title: "Movies", value: "20" }]}
              color={selectedItem === "movies" ? "success" : undefined}
              onClick={() => setSelectedItem("movies")}
            />
          </div>
          <div className="col">
            <CWidgetStatsD
              className="mb-3"
              icon={<CIcon className="my-4" icon={cilBarcode} height={52} />}
              style={{ "--cui-card-cap-bg": "#00aced" }}
              values={[{ title: "Bookings", value: "20" }]}
              color={selectedItem === "bookings" ? "success" : undefined}
              onClick={() => setSelectedItem("bookings")}
            />
          </div>
          <div className="col">
            <CWidgetStatsD
              className="mb-3"
              icon={<CIcon className="my-4" icon={cilPeople} height={52} />}
              style={{ "--cui-card-cap-bg": "#00aced" }}
              values={[{ title: "Users", value: "20" }]}
              color={selectedItem === "users" ? "success" : undefined}
              onClick={() => setSelectedItem("users")}
            />
          </div>
          <div className="col">
            <CWidgetStatsD
              className="mb-3"
              icon={<CIcon className="my-4" icon={cilVideo} height={52} />}
              style={{ "--cui-card-cap-bg": "#00aced" }}
              values={[{ title: "Theaters", value: "20" }]}
              onClick={() => setSelectedItem("theaters")}
              color={selectedItem === "theaters" ? "success" : undefined}
            />
          </div>
        </div>
        {selectedItem === "movies" && <MaterialTable title="Movies" />}
        {selectedItem === "theaters" && <MaterialTable title="Theaters" />}
        {selectedItem === "bookings" && <MaterialTable title="Bookings" />}
        {selectedItem === "users" && <MaterialTable title="Users" />}
      </div>
    </>
  );
};

export default Admin;
