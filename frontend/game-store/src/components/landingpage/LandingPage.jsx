import React, { useEffect, useState } from 'react'
import GameCard from '../commons/gamecard/GameCard'
import axios from '../../api/axios'

export default function LandingPage({setCounterItems, search, selectedPrice, isLoggedIn, loggedInUser}) {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGames = async () =>
    {
      setLoading(true)
      const res = await axios.get('/api/products')
      setGames(res.data)
      setLoading(false)
    }

    fetchGames();
  }, [])

  const filteredGamesName = games.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()));

  const filteredGamesByPrice = filteredGamesName.filter((game) => 
  {
    if(selectedPrice === '0-20'){
      return game.price >= 0 && game.price <= 20
    }
    else if(selectedPrice === '20-60')
    {
      return game.price > 20 && game.price <= 60 
    }
    else if(selectedPrice === '60-100')
    {
      return game.price > 60 && game.price <= 100
    }
    else if(selectedPrice === '100-plus')
    {
      return game.price > 100
    }
    else if(selectedPrice === 'none'){
      return game.price > 0
    }
  })

  if(loading){
    return(
      <div className='h-screen w-full flex justify-center items-center text-4xl font-bold'>
        Loading...
      </div>
    )
  }

  return (
    <div className='flex flex-wrap justify-center md:justify-start items-center gap-5 p-5'>
    {
      filteredGamesByPrice.length > 0 ? 
      (
        filteredGamesByPrice.map((games) => (
          <GameCard
            key={games.id}
            name={games.name}
            description={games.description}
            price={games.price}
            setCounterItems={setCounterItems}
            imageUrl={games.imageUrl}
            isLoggedIn={isLoggedIn}
            loggedInUser={loggedInUser}
          />
        ))
      ) : 
      (
        <div className='w-full flex justify-center items-center font-bold text-6xl'>No games found.</div>
      )
    }
    
        
    </div>
  )
}
