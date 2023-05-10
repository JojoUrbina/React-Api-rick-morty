import React from 'react'

export default function Character({character}) {
  return (
    <div >
    <h1>{character.name}</h1>
    <img src={character.image}/>
    </div>
  )
}
