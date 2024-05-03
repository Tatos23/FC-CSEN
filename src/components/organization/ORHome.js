import React from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'
import OrCards from './ORCards'
function ORHome ({user, role}) {
  return (
    <div>
        <Navbar/>
        <Hero title={ `Welcome,  ${user}` }subtitle= { `${role}, here is your homepage`} size={"py-20"}/>
        <OrCards/>
    </div>
  );
}

export default ORHome