import React from "react";

function Topbar( { mobileView } ) {

  if(!mobileView)
  {

    return (

      <div class="fixed lg:grid hidden top-0 right-0 lg:w-1/2 w-full lg:grid-cols-3 bg-white px-3 py-2 shadow-lg z-10">
        <div class="mb-4 lg:mb-0 flex flex-row justify-start items-center">
            <p class="text-gray-700 mr-2"><i class="fa-regular fa-map"></i></p>
            <p class="text-xs text-gray-700">Ealing Green, Ealing, London W5 5QT</p>
        </div>
        <div
            class="mb-4 lg:mb-0 flex flex-row justify-center items-center">
            <p class="text-gray-700 mr-2"><i class="fa-solid fa-envelope"></i></p>
            <a class="text-xs text-gray-700 h-green" href="">info(@)ealingtaxis.co.uk</a>
        </div>
        <div class="mb-4 lg:mb-0 flex flex-row items-center lg:justify-center">
            <p class="text-gray-700 mr-2"><i class="fa-solid fa-mobile-screen"></i></p>
            <a class="text-xs h-green" href="">02038134169</a>
        </div>
      </div> 

    );

  } else {

    return (

      <div class="flex flex-col items-center">
        <div class="mb-4 lg:mb-0 flex flex-row justify-start items-center">
            <p class="text-gray-700 mr-2"><i class="fa-regular fa-map"></i></p>
            <p class="text-xs text-gray-700">Ealing Green, Ealing, London W5 5QT</p>
        </div>
        <div
            class="mb-4 lg:mb-0 flex flex-row justify-center items-center">
            <p class="text-gray-700 mr-2"><i class="fa-solid fa-envelope"></i></p>
            <a class="text-xs text-gray-700 h-green" href="">info(@)ealingtaxis.co.uk</a>
        </div>
        <div class="mb-4 lg:mb-0 flex flex-row items-center lg:justify-center">
            <p class="text-gray-700 mr-2"><i class="fa-solid fa-mobile-screen"></i></p>
            <a class="text-xs h-green" href="">02038134169</a>
        </div>
      </div> 

    );

  }


    
}

export default Topbar;