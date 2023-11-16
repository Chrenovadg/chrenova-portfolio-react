import React from 'react'

export const UiCard = () => {
  return (
    <>
    <div className="max-w-sm rounded-lg py-2">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">Ui/Ux</h5>
    </div>

    <div className="card__container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center mt-4">
            <a href="#">
                <img className="rounded-t-lg" src="https://placeholder.pics/svg/100x100" alt="" />
            </a>
          </div>
          <div className="p-5">
              {/* <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UI/UX</h5>
              </a> */}
              <p className="mb-3 font-normal text-gray-700">
              Enfoque en la usabilidad, interacción efectiva y satisfacción del usuario para lograr resultados óptimos.
              </p>
              <a href="#" className="card__btn inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg ">
                  Conoce más
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>
    </>
  )
}
