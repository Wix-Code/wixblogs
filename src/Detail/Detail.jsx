import React from 'react'
import './details.css'
import { Link } from 'react-router-dom'

const Detail = ({data}) => {
  return (
    <div className='details'>
      <div className="detail">
        <Link to={`/single/${data.id}`}>
          <img src={data.img} alt="" />
        </Link>
      </div>
      <div className="deta">
        <p>{data.head}</p>
      </div>
    </div>
  )
}

export default Detail