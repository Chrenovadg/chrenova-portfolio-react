import { TypeAnimation } from 'react-type-animation';
import { NavBar } from './NavBar'

import 'flowbite';

export default function Hero() {

  return (
    <div className="hero__container font-recoleta">
      {/* Navbar */}
      <NavBar />


      <div className="relative isolate px-6 pt-14 lg:px-8 flex">


        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8e80ff] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:pt-48 lg:pt-56">
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl h1__hero uppercase">
            <div>
              <TypeAnimation sequence={[
                '➦ Frontend Dev ',
                2000,
                '✣ DISEÑADORA',
                2000,
                '▩ ILUSTRADORA',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
          </div> </h1>
            <p className="mt-6 text-lg leading-8 text-[#000] font-[500]"> ¡Hola! Soy <span className='subrrayado font-[700]'>Luana Przygrodzki</span>. Una
              <span className='font-[700] subrrayado'> Desarrolladora Frontend </span>
              desde hace 2 años y <span className='diseñadora font-[700] subrrayado'>Diseñadora Gráfica </span>desde 2013.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#"
                className="card__btn inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg">Descargar CV</a>

              <div className="flex justify-center">
                <a href="https://github.com/Chrenovadg" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mx-4">
                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

          

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
