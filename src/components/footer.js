import React from "react";
import { useHistory } from 'react-router-dom';


function Footer() {

    let history = useHistory();


    return (

        <footer>
            <div class="w-full h-auto flex lg:flex-row flex-col lg:px-16 px-5 py-12 bg-dark">
                <div class="lg:w-1/2 w-full h-auto">
                    <h2 class="text-2xl text-white font-bold mb-4">About Us</h2>
                    <p class="mt-3 text-gray-600 w-4/5">Acton Taxi is a credible name when it comes to providing online taxis in
                        Acton. For any kind of travelling, you can book a taxi at a cheap fare.</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-location-dot mr-2"></i>
                        N Acton Road, London NW10 6PH</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-envelope mr-2"></i>
                        info@actontaxiscabs.co.uk</p>
                    <p class="mt-4 text-gray-600"><i class="fa-solid fa-phone mr-2"></i>
                        02037403527</p>
                </div>
                <div class="w-1/2 h-auto flex grid-cols-2 lg:gap-8 gap-12 mt-10 lg:mt-0">
                    <div class="w-full h-auto flex flex-col">
                        <h2 class="text-2xl text-white font-bold mb-4">Services</h2>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/cabs');setTimeout(() => {const PageNode = document.getElementById('top');
                            PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}> Acton Cabs</a>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/mini_cabs');setTimeout(() => {const PageNode = document.getElementById('top'); PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}>Acton Minicabs</a>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/cars');setTimeout(() => {const PageNode = document.getElementById('top'); PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}>Acton Cars</a>
                    </div>
                    <div class="w-full h-auto flex flex-col">
                        <h2 class="text-2xl text-white font-bold mb-4">Information</h2>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/about');setTimeout(() => {const PageNode = document.getElementById('top'); PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}>About Us</a>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/contact');setTimeout(() => {const PageNode = document.getElementById('top'); PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}>Contact Us</a>
                        <a class="mt-4 text-gray-600 h-green" onClick={()=>{history.push('/services');setTimeout(() => {const PageNode = document.getElementById('top'); PageNode.scrollIntoView({behavior: "smooth"});}, 0)}}>Services</a>
                    </div>
                </div>
            </div>
            <div class="w-full h-auto bg-gray-700 flex lg:flex-row flex-col lg:px-24 px-12 py-8"> {/*bg-green*/}
                <div class="lg:w-1/2 w-full h-auto text-lg text-white">
                    <p>Copyright © 2021 Acton Cabs | All Rights Reserved.</p>
                    <p className="text-sm text-gray-400 mt-4">Built by Silicon Codes Ltd (Reg in England)</p>
                    <a className="text-sm text-gray-400 mt-0 pt-0" href="https://www.siliconcodes.com" rel="noreferrer" target="_blank">www.siliconcodes.com</a>
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