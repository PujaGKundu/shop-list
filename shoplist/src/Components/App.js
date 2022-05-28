import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import AddShop from "./AddShop";
import ViewShop from "./ViewShop";
import { UserContext } from "./UserContext";
import EditShop from "./EditShop";

export default function App() {
  let [name, setName] = useState("");
  let [area, setArea] = useState("");
  let [category, setCategory] = useState("");
  let [open, setOpen] = useState("");
  let [close, setClose] = useState("");
  let [selectedOption, setSelectedOption] = useState([]);

  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && area && category && open && close) {
      let obj = { name, area, category, open, close };
      setData(data.concat(obj));
      localStorage.setItem("data", JSON.stringify(data.concat(obj)));
    }
    setName(" ");
    setArea(" ");
    setCategory(" ");
    setOpen(" ");
    setClose(" ");
    setSelectedOption(" ");
    window.location.reload(false);
  };

  const handleChange = ({ target }) => {
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

  const handleDelete = (id) => {
    let newData = [...data];
    newData.splice(id, 1);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <UserContext.Provider value={{ data, selectedOption }}>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/add" exact>
              <AddShop
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </Route>
            <Route path="/view" exact>
              <ViewShop handleDelete={handleDelete} />
            </Route>
            <Route path="/edit/:id" component={EditShop} />
          </UserContext.Provider>
        </div>
      </BrowserRouter>
    </>
  );
}
