'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'




const Filter = () => {

    const searchParams = useSearchParams();
      const router = useRouter();
      const pathName = usePathname();
      const sort = searchParams.get("sort");
      
      const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", e.target.value);
        router.push(`${pathName}/?${params.toString()}`, {scroll:false})
      }
  return (
    <div className='flex items-center justify-end gap-2 text-sm text-gray-500 my-6'>
        <span>Sort by:</span>
        <select name="sort" id="sort" className='ring ring-gray-300 px-2 py-1 rounded-md' onChange={(e)=>handleChange(e)}>
            <option value="newest">Newest</option>
            <option value="lowest">Lowest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>
    </div>
  )
}

export default Filter