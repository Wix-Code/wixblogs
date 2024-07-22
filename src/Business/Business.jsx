import React from 'react'
import { Link } from 'react-router-dom'
import PolData from '../AllData/PolData'
import HeroData from '../AllData/HeroData'

const Business = () => {
  return (
    <div className="spot_it">
        <div className="sport_top">
          <span>business</span>
          <p>June 20th, 2024</p>
        </div>
      <div className='sport'>
        <div className="sports">
          {
            PolData.map((data) =>{
              return (
                <div className='details' key={data.id} style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0, 0, 0.1), rgba(0,0,0,0.7)),url(${data.img})`}}>
                  
                  <div className="deta">
                    <span>Politics</span>
                    <Link to={`/politicId/${data.id}`}><p>{data.head}</p></Link>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="news">
          <div className="sport_left">
            <p>Latest news</p>
          </div>
          <div className="sport_map">
            {
              HeroData.map((data) =>{
                return (
                  <div className="spot">
                    <div className="spot1">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="spot2">
                      <h1>{data.cat}</h1>
                      <p>{data.head}</p>
                      <span>June 21, 2024</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business