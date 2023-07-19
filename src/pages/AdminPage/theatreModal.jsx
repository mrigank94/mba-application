import { Button, Modal } from "react-bootstrap";
import { cities } from "../../util/cities";

const TheatreModal = ({
  showAddTheatreModal,
  showEditTheatreModal,
  resetState,
  editTheatre,
  addTheatre,
  theatreDetail,
  changeTheatreDetails,
}) => {
  return (
    <Modal
      show={showAddTheatreModal || showEditTheatreModal}
      onHide={resetState}
      backdrop="static"
      keyboard={false}
      centered
      size="lg md"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {showEditTheatreModal ? "Edit Theatre" : "Add Theatre"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={showEditTheatreModal ? editTheatre : addTheatre}>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              name="name"
              value={theatreDetail.name}
              placeholder="Theatre Name"
              onChange={changeTheatreDetails}
              required
              className="form-control"
            />
          </div>
          <div className="input-group my-2">
            <span className="input-group-text">City</span>
            <select
              name="city"
              className="form-select form-select-sm"
              value={theatreDetail.city}
              onChange={changeTheatreDetails}
              required
            >
              <option>Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group my-2">
            <span className="input-group-text">Description</span>
            <textarea
              type="text"
              name="description"
              value={theatreDetail.description}
              placeholder="Description"
              onChange={changeTheatreDetails}
              required
              className="form-control"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Pin Code</span>
            <input
              type="text"
              name="pinCode"
              placeholder="PinCode"
              value={theatreDetail.pinCode}
              onChange={changeTheatreDetails}
              required
              className="form-control"
            />
          </div>

          <div className="input-group justify-content-center">
            <div className="m-1">
              <Button variant="danger" onClick={resetState}>
                Cancel
              </Button>
            </div>
            <div className="m-1">
              <Button type="submit" variant="primary">
                {showEditTheatreModal ? "Edit Theatre" : "Add Theatre"}
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default TheatreModal;
