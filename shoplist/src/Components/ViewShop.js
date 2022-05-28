import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import DataView from "./DataView";

import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function ViewShop(props) {
  let info = useContext(UserContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const handleFilter = (event) => {
    if (info.selectedOption.includes(event)) {
      info.selectedOption = info.selectedOption.filter((o) => o !== event);
    } else {
      info.selectedOption = info.selectedOption.concat(event);
    }
  };

  const handleFilteredData = (selectedFilter, data) => {
    if (selectedFilter.length > 0) {
      data = data.filter((d) => {
        for (const select of selectedFilter) {
          if (d.area.includes(select)) {
            return true;
          } else if (d.category.includes(select)) {
            return true;
          } else if (d.open.includes(select)) {
            return true;
          } else if (d.close.includes(select)) {
            return true;
          }
        }
        return true;
      });
    }
    return data;
  };

  return (
    <>
      <div className="flex ai-start">
        <Sidebar handleFilter={handleFilter} info={info} />
        <DataView
          handleDelete={props.handleDelete}
          handleFilteredData={handleFilteredData(
            info.selectedOption,
            info.data
          )}
        />
      </div>
    </>
  );
}
