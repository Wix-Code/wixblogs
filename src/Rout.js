import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Sports from './Sports/Sports'
import SinglePage from './SinglePage/SinglePage'
import PoliticsId from './Politics/PoliticsId'
import Politics from './Politics/Politics'
import Tech from './Tech/Tech'
import TechPage from './Tech/TechPage'
import Business from './Business/Business'

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/sports'  element={<Sports />} />
        <Route path='/single'  element={<SinglePage />} >
          <Route path=':id' element={<SinglePage />} />
        </Route>
        <Route path='/politics'  element={<Politics />} />
        <Route path='/politicId'  element={<PoliticsId />} >
          <Route path=':id' element={<PoliticsId />} />
        </Route>
        <Route path='/tech'  element={<Tech />} />
        <Route path='/techpage'  element={<TechPage />} >
          <Route path=':id' element={<TechPage />} />
        </Route>
        <Route path='/business'  element={<Business />} />
      </Routes>
    </div>
  )
}

export default Rout