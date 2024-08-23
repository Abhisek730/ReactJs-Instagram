import React from 'react'
import { Link } from 'react-router-dom'

export default function Navi() {
  return (
    <div>
      <Link to="/counter">Counter</Link>
      <br/>
      <Link to="/dataFetcher">Data Fetcher</Link>
    </div>
  )
}
