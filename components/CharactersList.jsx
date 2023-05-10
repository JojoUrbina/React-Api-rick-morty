
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
    <div>{characters.map(character=>{
        return(
            <Character key={character.id} character={character}/>
        )
      })}</div>
  )
}
