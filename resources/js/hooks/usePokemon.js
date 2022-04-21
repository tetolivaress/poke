import { useState, useEffect } from "react"
import api from "@/api"


export const usePokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [loadingPokemons, setLoadingPokemons] = useState(false);
    const [current, setCurrent] = useState(0)
    const [isEmpty, setIsEmpty] = useState(false)
    let offset = current * 10

    const getPokemons = async () => {
        setLoadingPokemons(true)
        const pokemonsReponse = await api.get('/pokemons', { params: { offset } })

        setPokemons(pokemonsReponse.data.data)
        setLoadingPokemons(false)
    }

    const nextPokemons = () => setCurrent(current + 1)
    const previousPokemons = () => setCurrent(current - 1)

    useEffect(async () => {
        getPokemons()
        const pokemonsReponse =
            await api.get('/pokemons', { params: { offset: offset + 10 } })
        pokemonsReponse.data.data.length ? setIsEmpty(true) : setIsEmpty(false)
    }, [current])

    return {
        pokemons,
        loadingPokemons,
        getPokemons,
        nextPokemons,
        previousPokemons,
        current,
        isEmpty
    }
}

