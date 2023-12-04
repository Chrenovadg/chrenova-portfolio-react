import { DesignCard } from './Cards/DesignCard'
import { FrontCard } from './Cards/FrontCard'

export const Services = () => {
  return (
    <>
        <div className="services__container mb-80 md:h-[45vh] mx-auto max-w-2xl sm:max-w-4xl py-45 sm:py-50 lg:pb-0 flex justify-center items-center px-8 sm:px-6" >
            <div className="text-center cards__container">
                <div className="flex justify-between grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className='order-last '> <FrontCard/> </div>
                    <div className='order-last mt-5 sm:mt-0'> <DesignCard/> </div>
                </div>
            </div>
        </div>
    </>
  )
}
