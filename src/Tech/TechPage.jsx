import React from 'react'
import './tech.css'
import { useParams } from 'react-router-dom'
import SportsData from '../AllData/SportData'

const TechPage = () => {

  const {id} = useParams()

  const detail = SportsData.find((data)=>{
    return data.id === parseInt(id)
  })

  return (
    <div>
      <div className="single">
        <img src={detail.img} alt="" />
        <p>{detail.head}</p>
      </div>
    </div>
  )
}

export default TechPage