import React from "react";

export default function AddShop(props) {
  let handleChange = props.handleChange;
  let handleSubmit = props.handleSubmit;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Enter Shop Details</h2>
        <div>
          <label htmlFor="name">Shop Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name of the shop"
            required
            onChange={handleChange}
            data-id="name"
          />
        </div>

        <div>
          <label htmlFor="area">Area of Shop:</label>
          <select data-id="area" name="area" onChange={handleChange} required>
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
            name="category"
            onChange={handleChange}
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
            name="open"
            data-id="open"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="close">Closing Date:</label>
          <input
            type="date"
            name="close"
            data-id="close"
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn">Add Shop Data</button>
      </form>
    </>
  );
}
