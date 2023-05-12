import React from 'react'

export default function Character({character}) {
  return (
    <div className='text-center p-5'>
    <h3>{character.name}</h3>
    <img className='img-fluid rounded-pill'  src={character.image}/>
    <p>{character.origin.name}</p>
    </div>
  )
}