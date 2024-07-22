import React from 'react'
import './politics.css'
import PolData from '../AllData/PolData'
import { useParams } from 'react-router-dom'

const PoliticsId = () => {

    const {id} = useParams()
  
    const detail = PolData.find((data)=>{
      return data.id === parseInt(id)
    })
  return (
    <div className='singles'>
      <div className="single">
        <img src={detail.img} alt="" />
        <p>{detail.head}</p>
      </div>
    </div>
  )
}

export default PoliticsId