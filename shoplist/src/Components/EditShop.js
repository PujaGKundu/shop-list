import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function EditShop(props) {
  let id = props.location.id;

  let [name, setName] = useState(
    JSON.parse(localStorage.getItem("data"))[id].name
  );
  let [area, setArea] = useState(
    JSON.parse(localStorage.getItem("data"))[id].area
  );
  let [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("data"))[id].category
  );
  let [open, setOpen] = useState(
    JSON.parse(localStorage.getItem("data"))[id].open
  );
  let [close, setClose] = useState(
    JSON.parse(localStorage.getItem("data"))[id].close
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    let obj = { name, area, category, open, close };
    data[id] = obj;
    localStorage.setItem("data", JSON.stringify(data));
    props.history.push("/view");
  };

  const handleUpdate = ({ target }) => {
    let { id } = target.dataset;
    if (id === "name") {
      setName(target.value);
    }
    if (id === "area") {
      setArea(target.value);
    }
    if (id === "category") {
      setCategory(target.value);
    }
    if (id === "open") {
      setOpen(target.value);
    }
    if (id === "close") {
      setClose(target.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Edit Shop Details</h2>
        <div>
          <label htmlFor="name">Shop Name:</label>
          <input
            type="text"
            value={name}
            placeholder="Name of the shop"
            required
            onChange={handleUpdate}
            data-id="name"
          />
        </div>

        <div>
          <label htmlFor="area">Area of Shop:</label>
          <select data-id="area" value={area} onChange={handleUpdate} required>
            <option value="Thane">Thane</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai Suburban">Mumbai Suburban</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmednagar">Ahmednagar</option>
            <option value="Solapur">Solapur</option>
          </select>
        </div>

        <div>
          <label htmlFor="category">Shops Category:</label>
          <select
            data-id="category"
            value={category}
            onChange={handleUpdate}
            required
          >
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationery Shop">Stationery Shop</option>
          </select>
        </div>

        <div>
          <label htmlFor="open">Opening Date:</label>
          <input
            type="date"
            value={open}
            data-id="open"
            onChange={handleUpdate}
            required
          />
        </div>

        <div>
          <label htmlFor="close">Closing Date:</label>
          <input
            type="date"
            value={close}
            data-id="close"
            onChange={handleUpdate}
            required
          />
        </div>

        <button className="btn">Edit Shop Data</button>
      </form>
    </>
  );
}

export default withRouter(EditShop);
