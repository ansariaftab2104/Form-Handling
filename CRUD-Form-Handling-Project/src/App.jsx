import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-800 flex flex-col gap-5'>
      <Navbar/>
      <div className="div-flex-card flex flex-wrap gap-10 px-10">
        <Card/>
      </div>
      <Form/>
    </div>
  )
}

export default App
