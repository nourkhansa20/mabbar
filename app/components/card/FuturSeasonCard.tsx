'use client'

const FuturSeasonCard = ({ title, description, cards }: any) => {
    return (
        <div className="px-6 py-8 mt-20 ">
            <h3 className='lg:text-2xl text-xl font-bold'>{title}</h3>
            <p className='lg:text-2xl text-xl w-[80%]'>{description}</p>
            <div className="grid grid-cols-3 gap-3 justify-items-center items-center justify-center mt-8">
                {
                    cards?.map((card, index) => (
                        <div key={index} className="h-[75px] lg:h-[240px] w-[100px] lg:w-[400px] group relative">
                            <img src={card.img} alt={card.title} className="size-full object-cover" />
                            <div className="flex justify-center text-[17ex] text-secondary font-extrabold  items-center bg-green-900 bg-opacity-0 opacity-0  absolute top-0 z-10 size-full group-hover:bg-opacity-40 group-hover:opacity-100  transition-all duration-700">
                                +
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FuturSeasonCard