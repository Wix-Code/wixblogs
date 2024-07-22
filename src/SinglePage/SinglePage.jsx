import React from 'react'
import { useParams } from 'react-router-dom'
import SportsData from '../AllData/SportData'
import './single.css'

const SinglePage = () => {

  const {id} = useParams()

  const detail = SportsData.find((data)=>{
    return data.id === parseInt(id)
  })

  return (
    <div className='singles'>
      <div className="single">
        <img src={detail.img} alt="" />
        <h2>{detail.head}</h2>
      </div>
    </div>
  )
}

export default SinglePage