import React from 'react'
import CardDonor from './CardDonor';
import { useState } from 'react' 

const RequestCardsDonor = () => {
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

export default RequestCardsDonor