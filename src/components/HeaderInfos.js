import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function HeaderInfos() {
  const [headerData, setHeaderData] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/global')
  }, [])

  return (
    <div className='header-container'>
      <h1>
        Header
      </h1>
    </div>

  )
}
