import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Sidebar(props) {
  let info = useContext(UserContext);

  let handleFilter = props.handleFilter;

  let categories = info.data.reduce((acc, cv) => {
    acc = acc.concat(cv.category);
    return acc;
  }, []);
  let uniqueCategories = [...new Set(categories)];

  let areas = info.data.reduce((acc, cv) => {
    acc = acc.concat(cv.area);
    return acc;
  }, []);
  let uniqueAreas = [...new Set(areas)];

  let opens = info.data.reduce((acc, cv) => {
    acc = acc.concat(cv.open);
    return acc;
  }, []);
  let uniqueOpens = [...new Set(opens)];

  let closes = info.data.reduce((acc, cv) => {
    acc = acc.concat(cv.close);
    return acc;
  }, []);
  let uniqueCloses = [...new Set(closes)];

  return (
    <>
      <div className="width-30">
        <h2>Areas</h2>
        <ul>
          {uniqueAreas.map((area, i) => (
            <li key={i}>
              <input type="checkbox" onClick={() => handleFilter(area)} />
              {area}
            </li>
          ))}
        </ul>
        <hr />
        <h2>Categories</h2>
        <ul>
          {uniqueCategories.map((category, i) => (
            <li key={i}>
              <input type="checkbox" onClick={() => handleFilter(category)} />
              {category}
            </li>
          ))}
        </ul>
        <hr />
        <h2>Shop Open Dates</h2>
        <ul>
          {uniqueOpens.map((open, i) => (
            <li key={i}>
              <input type="checkbox" onClick={() => handleFilter(open)} />
              {open}
            </li>
          ))}
        </ul>
        <hr />
        <h2>Shop Close Dates</h2>
        <ul>
          {uniqueCloses.map((close, i) => (
            <li key={i}>
              <input type="checkbox" onClick={() => handleFilter(close)} />
              {close}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
