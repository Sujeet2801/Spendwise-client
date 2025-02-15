import React from 'react'

function Appbar() {
  return (
    <div className='flex justify-between px-28 py-3 relative'>
        <p className='text-3xl font-bold'>Spendwise</p>
        <button className='bg-blue-500 text-white px-4 py-1 rounded'>LOGIN</button>
    </div>
  )
}

export default Appbar