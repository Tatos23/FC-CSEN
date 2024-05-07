import React from 'react'

const Hero = ({ title, subtitle , size}) => {
    return (
        <section class={`bg-white ${size} mb-4`}>
            <div
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div class="text-center">
                    <h1
                        class="text-2xl font-extrabold text-black sm:text-4xl md:text-5xl"
                    >
                        {title}
                    </h1>
                    <p class="my-4 text-xl text-green-500 ">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero