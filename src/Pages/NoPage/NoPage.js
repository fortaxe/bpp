import React from 'react'
import'./NoPage.css'
import {GiSittingDog} from 'react-icons/gi'
const NoPage = () => {
  window.scrollTo(0, 0);

  return (
    <div className='nopageContainer'>
        <div>
          <GiSittingDog/>
            <h1>No Page Found</h1>
        </div>
    </div>
  )
}

export default NoPage