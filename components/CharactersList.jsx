import { useEffect, useState } from "react";
import Character from "./Character";

import React from "react";

export function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center  ">
      
    <button onClick={()=>props.setPage(props.page>1?props.page-1:1) } className="btn btn-secondary btn-sm">Atras</button>
    <button
        onClick={() => props.setPage(props.page + 1)}
        className="btn btn-secondary btn-sm"
      >
        Pagina {props.page + 1}
      </button>
    </header>
  );
}

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container ">
      <NavPage page={page} setPage={setPage} />
      <div className="row">
        {characters.map((character) => {
          return (
            <div className="col-md-4 " key={character.id}>
              <Character character={character} />
            </div>
          );
        })}
      </div>
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}
