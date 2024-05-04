import React from 'react'
import CardDonor from './CardDonor'


const ORCardsVR = () => {
  return (
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 rounded-lg">
          <CardDonor bg = 'bg-gray-200'>
          <h2 class="text-2xl font-bold text-green-800">Request Section</h2>
            <p class="mt-2 mb-4 text-green-800">
              Request 1
            </p>
            <a
              href="/RequestCardsDonor.js"
              class="inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-700"
            >
              View Request
            </a>
         </CardDonor>   
        
        </div>
      </div>
    </section>
  )
}

export default ORCardsVR