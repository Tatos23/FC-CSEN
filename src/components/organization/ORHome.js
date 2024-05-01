import React from 'react'
import Hero from '../Hero'
const ORHome = ({user, role}) => {
  return (
    <div>
        <Hero title={ `Welcome,  ${user}` }subtitle= { `${role}, here is your homepage`}/>
    </div>
  )
}

export default ORHome