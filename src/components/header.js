import React from "react";
import { useHistory } from 'react-router-dom';
import Topbar from './topbar'


function Header({page}) {

    const [showNav, setshowNav] = React.useState(false);
    const [showdropdown, setshowdropdown] = React.useState(false);

    return (

    <header class="w-full h-auto">
        <Topbar mobileView={false} />
        <div className={page == "home" ? "w-full h-auto bg-transparent absolute lg:p-16 p-6" : "w-full h-auto bg-gray-700 relative lg:px-16 lg:pt-16 lg:pb-12 p-6"}>
            <div class="w-full h-auto flex flex-row items-center">
                <div class="w-2/5 flex justify-start">
                    <div class="">
                        <a href="/">
                            {/* <img src="images/logo/logo.png" alt="Logo" /> */}
                           <h1 className="text-2xl text-white font-semibold">Actontaxiscabs</h1> 
                        </a>
                    </div>
                </div>
                <div class="w-3/5">
                    <div class="w-full hidden lg:flex flex-row justify-between font-semibold text-white">
                        <div class="h-green">
                            <a href="/about">ABOUT</a>
                        </div>
                        <div class="h-green">
                            <a href="/services">SERVICES</a>
                        </div>
                        <div class="relative cursor-pointer">
                            <p onClick={()=>setshowdropdown(!showdropdown)} className="h-green z-10">CARS FLEET</p>
                            {showdropdown ? <div class='absolute w-24 flex flex-col pt-4 px-2 pb-4 top-5 left-0 shadow-lg text-sm slide-down-fast'>
                                <a className="h-green" href="/cars">CARS</a>
                                <a className="h-green" href="/cabs">CABS</a>
                                <a className="h-green" href="/mini_cabs">MINI CABS</a>
                            </div>: null}

                        </div>
                        <div class="h-green">
                            <a href="/airports">AIRPORTS</a>
                        </div>
                        <div class="h-green">
                            <a href="/train_stations">TRAIN STATIONS</a>
                        </div>
                        <div class="h-green">
                            <a href="/contact">CONTACT</a>
                        </div>
                    </div>
                </div>
                {!showNav ? 
                <i className="fa-bars fa-solid text-lg text-white lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i> :
                <i className="fa-times fa-solid text-lg lg:hidden z-50" onClick={()=>setshowNav(!showNav)}></i>
                }
                {showNav ? 
                    <nav className={"fixed w-full h-screen left-0 top-0 bg-white flex flex-col justify-between px-6 py-12 items-center slide-down z-10"}>
                        <div class="h-green">
                            <a href="/about">ABOUT</a>
                        </div>
                        <div class="h-green">
                            <a href="/services">SERVICES</a>
                        </div>
                        <div class="h-green">
                            <a href="/cars">CARS</a>
                        </div>
                        <div class="h-green">
                            <a href="/cabs">CABS</a>
                        </div>
                        <div class="h-green">
                            <a href="/mini_cabs">MINI CABS</a>
                        </div>
                        <div class="h-green">
                            <a href="/airports">AIRPORTS</a>
                        </div>
                        <div class="h-green">
                            <a href="/train_stations">TRAIN STATIONS</a>
                        </div>
                        <div class="h-green">
                            <a href="/contact">CONTACT</a>
                        </div>
                        <Topbar mobileView={true} />
                    </nav> : null 
                }
            </div>
        </div>
    </header>

    );
}

export default Header;
