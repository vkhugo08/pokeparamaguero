import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import PokeCard from './PokeCard'
import Pagination from '../pagination/Pagination'


const Pokedex = () => {

   const nameUser = useSelector(state => state.nameUser)

   const [pokemons, setPokemons] = useState()
   const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

   const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100'

  useEffect(() => {
    axios.get(URL)
    .then(res => setPokemons(res.data.results))
    .catch(err => console.log(err))
  }, [])
  
  console.log(pokemons)

  const max = pokemons?.length / perPage

  return (
    <div>
        <h2>Hi Trainer : {nameUser} ¡Wellcome to the POKEDEX !</h2>
        <div className='superiorPages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
        {
            pokemons
            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
            ).map( pokemon => (
              <PokeCard 
                key={ pokemon.url }
                url={ pokemon.url }
                />
            ))
        }
        <div className='pages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
    </div>
  )
}

export default Pokedex