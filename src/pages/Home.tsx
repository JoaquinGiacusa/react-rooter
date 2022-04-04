import React, { useState, useEffect } from "react";
import { SearchForm } from "../components/SearchForm";
import { SearchResultItem } from "../components/SearchResultItem";
import { Link, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>HOME: Hace tu busqueda</h3>
    </div>
  );
}

export { Home };

// import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       Home
//       <Link to="/">Link a pagina 2</Link>
//     </div>
//   );
// }

// export { App };
