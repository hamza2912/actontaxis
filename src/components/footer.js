import React from "react";
import { useHistory } from 'react-router-dom';


function Footer() {


    return (

        <footer>
            <div class="w-full h-auto flex lg:flex-row flex-col lg:px-16 px-5 py-12 bg-dark">
                <div class="lg:w-1/2 w-full h-auto">
                    <h2 class="text-2xl text-white font-bold mb-4">About Us</h2>
                    <p class="mt-3 text-gray-600 w-4/5">Ealing Taxi is a credible name when it comes to providing online taxis in
                        Ealing. For any kind of travelling, you can book a taxi at a cheap fare.</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-location-dot mr-2"></i>
                        Ealing Green, Ealing, London W5 5QT, United Kingdom</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-envelope mr-2"></i>
                        info(@)ealingtaxis.co.uk</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-phone mr-2"></i>
                        02038134169</p>
                </div>
                <div class="w-1/2 h-auto flex grid-cols-2 lg:gap-8 gap-12 mt-10 lg:mt-0">
                    <div class="w-full h-auto flex flex-col">
                        <h2 class="text-2xl text-white font-bold mb-4">Services</h2>
                        <a class="mt-4 text-gray-600 h-green" href=""> Ealing Cabs</a>
                        <a class="mt-4 text-gray-600 h-green" href="">Ealing Minicabs</a>
                        <a class="mt-4 text-gray-600 h-green" href="">Ealing Cars</a>
                    </div>
                    <div class="w-full h-auto flex flex-col">
                        <h2 class="text-2xl text-white font-bold mb-4">Information</h2>
                        <a class="mt-4 text-gray-600 h-green" href="">About Us</a>
                        <a class="mt-4 text-gray-600 h-green" href="">Contact Us</a>
                        <a class="mt-4 text-gray-600 h-green" href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto bg-gray-700 flex lg:flex-row flex-col lg:px-24 px-12 py-8"> {/*bg-green*/}
                <div class="lg:w-1/2 w-full h-auto text-lg text-white">
                    <p>Copyright © 2021 Ealing Cabs | All Rights Reserved.</p>
                </div>
                <div class="lg:w-1/2 w-full h-auto text-white text-xl flex justify-center items-center mt-4 lg:mt-0">
                    <div className="w-1/2 flex justify-between">
                    <a class="hover:text-gray-600" href=""><i class="fa-brands fa-twitter"></i></a>
                    <a class="hover:text-gray-600" href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a class="hover:text-gray-600" href=""><i class="fa-brands fa-instagram"></i></a>
                    <a class="hover:text-gray-600" href=""><i class="fa-brands fa-pinterest-p"></i></a>
                    </div>
                    
                </div>
            </div>
        </footer>     

    );
}

export default Footer;