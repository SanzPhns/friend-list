import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowFriend from "./components/ShowFriend/ShowFriend";
import AddFriend from "./components/AddFriend/AddFriend";
import EditFriend from "./components/EditFriend/EditFriend";
import Home from "./components/Home";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="showFriend" element={<ShowFriend />}>
            <Route path=":id" element={<EditFriend />} />
          </Route>
          <Route path="addFriend" element={<AddFriend />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
