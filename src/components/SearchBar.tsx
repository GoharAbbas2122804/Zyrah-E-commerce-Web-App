import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='hidden md:flex flex-row items-center gap-2 rounded-full ring-1 ring-gray-200 px-2 py-1 shadow-md'>
        <Search className='h-5 w-5 text-gray-400 '/>
        <input type="text" placeholder='Search' className='border-none outline-none'/>
    </div>
  )
}

export default SearchBar