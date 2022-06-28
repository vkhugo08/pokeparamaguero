import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

    const [pokemon, setpokemon] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setpokemon(res.data))
        .catch(err => console.log(err))
      
    }, [])
    

    const navigate = useNavigate()

    const clickCard = () => navigate ( `/pokedex/${pokemon.id}` )

  return (
    <article className='poke-card' onClick={clickCard}>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
        <div className='infoCard'>
              <p><b>HP: </b>{pokemon?.stats[0].base_stat}</p>
              <p><b>Attack: </b>{pokemon?.stats[1].base_stat}</p>
              <p><b>Defense: </b>{pokemon?.stats[2].base_stat}</p>
              <p><b>Sp.Attack: </b>{pokemon?.stats[3].base_stat}</p>
              <p><b>Sp.Defennse: </b>{pokemon?.stats[4].base_stat}</p>
              <p><b>Speed: </b>{pokemon?.stats[5].base_stat}</p>
            </div>
    </article>
  )
}

export default PokeCard