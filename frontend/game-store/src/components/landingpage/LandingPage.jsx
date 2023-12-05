import React, { useEffect, useState } from 'react'
import GameCard from '../commons/gamecard/GameCard'

const dummyGames = 
[
    {name: 'Zelda' ,        desription: 'blah blah blah' , value: 145 , price: '$145.00'},
    {name: 'Emperator Rome' , desription: 'blah blah blah' , value: 126 , price: '$126.00'},
    {name: 'Assassin\'s Creed' , desription: 'blah blah blah' , value: 35 , price: '$35.00'},
    {name: 'Call Of Duty' , desription: 'blah blah blah' , value: 45 , price: '$45.00'},
    {name: 'Red Dead Redemption' , desription: 'blah blah blah' , value: 50 , price: '$50.00'},
    {name: 'The Witcher' , desription: 'blah blah blah' , value: 30 , price: '$30.00'},
    {name: 'GTA' , desription: 'blah blah blah' ,  value: 90 , price: '$90.00'},
    {name: 'Mount & Blade' , desription: 'blah blah blah' , value: 40 , price: '$40.00'},
    {name: 'Resident Evil' , desription: 'blah blah blah' , value: 10 , price: '$10.00'},
    {name: 'Dota' , desription: 'blah blah blah' , value: 80 , price: '$80.00'},
    {name: 'Civilization' , desription: 'blah blah blah' , value: 60 , price: '$60.00'},
    {name: 'Counter-Strike' , desription: 'blah blah blah' , value: 150 , price: '$150.00'},
]

export default function LandingPage({setCounterItems, search, selectedPrice}) {
  const [games, setGames] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGames = async () =>
    {
      setLoading(true)
    }

  }, [])

  const filteredGamesName = dummyGames.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()));

  const filteredGamesByPrice = filteredGamesName.filter((game) => 
  {
    if(selectedPrice === '0-20'){
      return game.value >= 0 && game.value <= 20
    }
    else if(selectedPrice === '20-60')
    {
      return game.value > 20 && game.value <= 60 
    }
    else if(selectedPrice === '60-100')
    {
      return game.value > 60 && game.value <= 100
    }
    else if(selectedPrice === '100-plus')
    {
      return game.value > 100
    }
    else if(selectedPrice === 'none'){
      return game.value > 0
    }
  })

  return (
    <div className='flex flex-wrap justify-center md:justify-start items-center gap-5 p-5'>
    {
      filteredGamesByPrice.length > 0 ? 
      (
        filteredGamesByPrice.map((games, index) => (
          <GameCard
            key={index}
            name={games.name}
            description={games.desription}
            price={games.price}
            setCounterItems={setCounterItems}
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
