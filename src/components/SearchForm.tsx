import React from "react";
import { Boton } from "./Boton";
import { TextField } from "./TextField";
import { Link, useParams, useNavigate } from "react-router-dom";

export function SearchForm() {
  let navigate = useNavigate();
  function handleSearch(e) {
    e.preventDefault();
    const search = e.target.search.value;
    navigate("/search/" + search, { replace: true });
  }

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <TextField inputType="text" inputName="search" />
      <Boton>Buscar</Boton>
    </form>
  );
}
