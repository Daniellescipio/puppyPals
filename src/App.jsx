import { useState } from 'react'
import { puppyList } from './data'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log(puppies)
  return (
    <>
    {puppies.map(puppy=><p key ={puppy.id}>{puppy.name}</p>)}
    </>
  )
}

export default App
