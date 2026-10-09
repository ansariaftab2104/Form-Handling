import React from 'react'

const Form = () => {
  return (
    <div className='w-100 bg-black rounded-md text-white flex flex-col gap-3 px-3 py-2'>
        <h1 className='text-xl text-center'>Create User</h1>
        <form action="">
            <div className="gap-div flex flex-col gap-5 rounded overflow-hidden">
            <input className='text-xl px-3 py-1 w-full border-2' type="text" placeholder='Enter Your Name'/>
            <input className='text-xl px-3 py-1 w-full border-2' type="email" placeholder='Enter Your Email'/>
            <input className='text-xl px-3 py-1 w-full border-2' type="number" placeholder='Enter Your Number'/>
            <div className="btn flex justify-center">
            <input className='bg-green-600 px-3 py-1 rounded cursor-pointer' type="submit" />
            </div>
            </div>
        </form>
    </div>
  )
}

export default Form
