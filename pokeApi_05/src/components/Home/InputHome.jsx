import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'


const InputHome = () => {

const {register, handleSubmit, reset} = useForm()

const dispatch = useDispatch()

const navigate = useNavigate()

const submit = data =>{
    dispatch(setNameGlobal(data.nameUser))
    reset({
        nameUser:''
    })
navigate('/pokedex')
}


  return (
    <form onSubmit={handleSubmit(submit)} >
        <input placeholder='Please, enter your name here!' type="text" {...register('nameUser')} />
        <button>Lest GO!</button>
    </form>
  )
}

export default InputHome