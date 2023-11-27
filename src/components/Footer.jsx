import React from 'react'
import Logo from '../assets/img/logo.svg'
import twIcon from '../assets/img/rrss/tw.svg'
import igIcon from '../assets/img/rrss/ig.svg'

export const Footer = () => {
  return (
    <>
        <footer className="footer shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="">
                                <img src={twIcon} alt="" className='icon__tech sm:mb-4'/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <img src={igIcon} alt="" className='icon__tech sm:mb-4'/>
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
                    <a href="https://flowbite.com/" className="hover:underline"> Chrenova™</a>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    </>
  )
}
