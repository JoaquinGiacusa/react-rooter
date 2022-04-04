import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SearchResultItem } from "../components/SearchResultItem";

function Search() {
  const [results, setResults] = useState([]);
  const params = useParams();

  async function pullResults(q) {
    const res = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=" + q
    );
    const data = await res.json();
    setResults(data.results);
    console.log(data);
  }

  useEffect(() => {
    pullResults(params.query);
  }, [params]);

  return (
    <div>
      {results.map((r) => (
        <SearchResultItem
          key={r.title}
          title={r.title}
          price={r.price}
          picture={r.thumbnail}
          id={r.id}
        />
      ))}
    </div>
  );
}

export { Search };
