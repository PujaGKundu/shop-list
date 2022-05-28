import React from "react";
import { Link } from "react-router-dom";

export default function DataView(props) {
  let data = props.handleFilteredData;
  let handleDelete = props.handleDelete;

  return (
    <>
      <div className="width-60 grid">
        {!data
          ? "No Data to Display"
          : data.map((info, i) => (
              <div className="box flex flex-column" key={info.name}>
                <div>
                  <h2>
                    Shop Name: <span>{info.name}</span>
                  </h2>
                  <h3>
                    Shop Area: <span>{info.area}</span>
                  </h3>
                  <h4>
                    Type: <span>{info.category}</span>
                  </h4>
                </div>
                <div className="flex">
                  <Link
                    to={{
                      pathname: `/edit/${info.name}`,
                      id: i,
                    }}
                    className="btn edit"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(i)}
                    className="btn delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
