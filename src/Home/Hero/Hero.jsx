import React from 'react'
import './hero.css'
import HeroData from '../../AllData/HeroData'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero1">
        {
          HeroData.map((data)=>{
            return(
              <div className="hero_data" key={data.id} style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0, 0, 0.1), rgba(0,0,0,0.7)),url(${data.img})`}}>
                <div className="hero_del">
                  <span>{data.cat}</span>
                  <h1>{data.head}</h1>
                  <p>{data.date}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Hero