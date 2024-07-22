import React from 'react'
import HeroData from '../../AllData/HeroData'

const Feature = () => {
  return (
    <div className="trending">
      <div className='tren'>
        <div className="trend_left">
          <div className="trending_fil">
            <p>Featured News</p>
          </div>
         <div className="trech">
          {
              HeroData.map((data)=>{
                return(
                  <div className="trend" key={data.id}>
                    <div className="trend_img">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="tren_del">
                      <h2>{data.cat}</h2>
                      <p>{data.head.slice(0, 60)}...</p>
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

export default Feature