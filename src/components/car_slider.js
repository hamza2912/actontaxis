import React from "react";


function Car_slider({title, src, desc}) {


    return (

      <div class="item w-full h-auto active">
            <div class="w-full h-auto lg:p-12 py-10">
                <div class="w-full h-auto boxes">
                    <img class="cars" src={src} alt="MVP Cars in Ealing" />
                    <div class="h-auto rboxes">
                        <div class="rbox1">

                        </div>
                        <div class="rbox2">

                        </div>
                        <div class="rbox3">

                        </div>
                    </div>
                </div>
                <div class="w-full h-auto">
                    <h3 class="text-2xl font-semibold my-4 text-center"><a id="h-a" href="">{title}</a></h3>
                    <p>{desc}</p>
                </div>
            </div>
        </div>

    );
}

export default Car_slider;