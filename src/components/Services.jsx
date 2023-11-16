import { DesignCard } from './Cards/DesignCard'
import { FrontCard } from './Cards/FrontCard'

export const Services = () => {
  return (
    <>
        <div className="py-32 mx-auto max-w-2xl h-screen-96 sm:max-w-4xl py-45 sm:py-50 lg:py-0 lg:pb-32 flex justify-center items-center">
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
