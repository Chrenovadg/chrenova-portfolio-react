
export const CardServices = () => {
  return (
      <div class="card__container max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-center">
            <a href="#">
                <img class="rounded-t-lg" src="https://placeholder.pics/svg/100x100" alt="" />
            </a>
          </div>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#" class="card__btn inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg ">
                  Conoce más
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>
  )
}
