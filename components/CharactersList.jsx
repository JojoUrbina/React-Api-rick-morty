
import { useEffect, useState } from "react";
import Character from "./Character"

export default function CharactersList() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
      }
      fetchData();
      
    }, []);

  return (
    <div className="container ">
        <div className="row">
        {characters.map(character=>{
        return(
            <div className="col-md-4 " key={character.id}>
            <Character  character={character}/>
            </div>
        )
        
      })}
      </div>
      </div>
  )
}
