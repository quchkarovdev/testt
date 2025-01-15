import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='flex justify-between bg-black items-center px-12'>
      <h1 className='text-white font-bold'>N.SELLER</h1>
      <div className='flex gap-10 text-gray-400'>
        <p>Маркетплейс</p>
        <p>Про нас </p>
        <p>Преемущества</p>
        <p>Тарифы</p>
      </div>
      <button className='bg-gray-700 rounded-lg px-7 py-3'>Войти</button>
      </div>
      <div className='db text-start'><br /><br /><br /><br />
        <p className='text-gray-500 text-2xl'>Novo - маркетплейс техники</p><br />
        <h1 className='text-white text-6xl'>Продавай технику <br /> быстро и удобно! </h1><br /><br />
        <button className='bg-green-600 px-2 py-2 rounded-lg text-white w-80 h-16'>стать продавцем на Novo</button>
      </div>
    </div>
  )
}

export default Header
