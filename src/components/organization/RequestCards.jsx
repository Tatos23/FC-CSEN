import React from 'react'
import Card from '../Card'
import { useState } from 'react' 

const RequestCards = () => {
    const [selectedValue, setSelectedValue,] = useState("option1");
    const handleRadioChanges = (value)=> {setSelectedValue (value)};
  return (
    <div>
        <section class="py-4">
         <div class="container-xl lg:container m-auto">
             <Card bg='bg-gray-200'>
                <h2 className='text-2xl text-green-500'>Request Form </h2>
                <p>

                </p>
             </Card>
         </div>
        </section>
    </div>
  )
}

export default RequestCards