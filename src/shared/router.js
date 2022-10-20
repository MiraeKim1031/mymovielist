import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Page from "../pages/Page";
import Write from "../pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="moviepage" element={<Movies />} />
        <Route path="page/:id" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
