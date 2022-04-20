import { useState, useEffect } from "react"
import api from "@/api"


export const usePokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [loadingPokemons, setLoadingPokemons] = useState(false);

    const getPokemons = async () => {
        setLoadingPokemons(true)
        const pokemonsReponse = await api.get('/pokemons')
        setPokemons(pokemonsReponse.data.data)
        setLoadingPokemons(false)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return {
        pokemons,
        loadingPokemons
    }
}

