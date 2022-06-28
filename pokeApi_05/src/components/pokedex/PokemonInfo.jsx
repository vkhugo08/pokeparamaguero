import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const PokemonInfo = () => {

    const [pokemoninfo, setPokemoninfo] = useState()

    const {id} = useParams()

    useEffect(() => {
     const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
     axios.get(URL)
     .then(res => setPokemoninfo(res.data))
     .catch(err => console.log(err))
    }, [id])

    console.log(pokemoninfo);

    const navigate = useNavigate()
    const back = () => navigate('/pokedex')    

  return (
    <article className='poke-card'>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <h2>{pokemon?.name}</h2>
        {/* <div className='info-poke'>
              <p><b>HP: </b>{pokemon?.stats[0].base_stat}</p>
              <p><b>Attack: </b>{pokemon?.stats[1].base_stat}</p>
              <p><b>Defense: </b>{pokemon?.stats[2].base_stat}</p>
              <p><b>Sp.Attack: </b>{pokemon?.stats[3].base_stat}</p>
              <p><b>Sp.Defennse: </b>{pokemon?.stats[4].base_stat}</p>
              <p><b>Speed: </b>{pokemon?.stats[5].base_stat}</p>
            </div> */}
            <button onClick={back}>Back!</button>
    </article>
  )
}

export default PokemonInfo