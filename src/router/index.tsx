import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Item } from "../pages/Item";
import { Layout } from "../components/Layout";
import { Search } from "../pages/SearchResults";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="item/:id" element={<Item />} />
      </Route>
    </Routes>
  );
}
