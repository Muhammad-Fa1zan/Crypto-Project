import React, { type Dispatch } from 'react'
import { Input } from '@/components/ui/input'
function CoinsInput({setSearch} : {setSearch: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <>
    <Input className='h-10' onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for a coin" />
    </>
  )
}

export default CoinsInput
