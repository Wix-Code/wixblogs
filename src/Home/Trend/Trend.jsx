import React, { useState } from 'react'
import './trend.css'
import HeroData from '../../AllData/HeroData'

const Trend = () => {

  const [filt, setFilt]=useState(HeroData)

  const Filter = (x) => {
    const item = HeroData.filter((data) =>{
      return data.cat === x
    })
    setFilt(item)
  }

  const all = () => {
    setFilt(HeroData)
  }
  return (
    <div className="trending">
      <div className='tren'>
        <div className="trend_left">
          <div className="trending_fil">
            <p>Trending News</p>
            <div className="fil_opt">
              <span onClick={all}>All</span>
              <span onClick={()=>Filter("sports")}>sports</span>
              <span onClick={()=>Filter("politics")}>politics</span>
              <span onClick={()=>Filter("tech")}>tech</span>
              <span onClick={()=>Filter("business")}>business</span>
            </div>
          </div>
         <div className="trech">
          {
              filt.map((data)=>{
                return(
                  <div className="trend" key={data.id}>
                    <div className="trend_img">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="tren_del">
                      <h2>{data.cat}</h2>
                      <p>{data.head.slice(0, 50)}...</p>
                      <span>June 12, 2024</span>
                    </div>
                  </div>
                )
              })
            }
         </div>
        </div>
        <div className="trend_right">
          <div className="latest">
            <h1>Latest news</h1>
          </div>
          <div className="late">
            {
              HeroData.map((data)=>{
                return(
                  <div className="lates">
                    <div className="lat_img">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="lat_del">
                      <h3>{data.cat}</h3>
                      <p>{data.head}</p>
                      <span>June 20, 2024</span>
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

export default Trend