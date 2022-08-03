import React from "react";
import { useHistory } from 'react-router-dom';
import Topbar from './topbar'


function Header({page}) {

    const [showNav, setshowNav] = React.useState(false);

    return (

    <header class="w-full h-auto">
        <Topbar mobileView={false} />
        <div className={page == "home" ? "w-full h-auto bg-transparent absolute lg:p-16 p-6" : "w-full h-auto bg-gray-700 relative lg:px-16 lg:pt-16 lg:pb-12 p-6"}>
            <div class="w-full h-auto flex flex-row items-center">
                <div class="w-2/5 flex justify-start">
                    <div class="">
                        <a href="">
                            {/* <img src="images/logo/logo.png" alt="Logo" /> */}
                           <h1 className="text-2xl text-white font-semibold">Actontaxiscabs</h1> 
                        </a>
                    </div>
                </div>
                <div class="w-3/5">
                    <div class="w-full hidden lg:flex flex-row justify-between font-semibold text-white">
                        <div class="h-green">
                            <a href="">HOME</a>
                        </div>
                        <div class="h-green">
                            <a href="/about">ABOUT</a>
                        </div>
                        <div class="h-green">
                            <a href="">SERVICES</a>
                        </div>
                        <div class="h-green">
                            <a href="">AIRPORTS</a>
                        </div>
                        <div class="h-green">
                            <a href="">TRAIN STATIONS</a>
                        </div>
                        <div class="h-green">
                            <a href="">CONTACT</a>
                        </div>
                    </div>
                </div>
                {!showNav ? 
                <i className="fa-bars fa-solid text-lg text-white lg:hidden z-10" onClick={()=>setshowNav(!showNav)}></i> :
                <i className="fa-times fa-solid text-lg lg:hidden z-10" onClick={()=>setshowNav(!showNav)}></i>
                }
                {showNav ? 
                    <nav className={"fixed w-full h-screen left-0 top-0 bg-white flex flex-col justify-between px-6 py-12 items-center slide-down"}>
                        <div class="h-green">
                            <a href="">HOME</a>
                        </div>
                        <div class="h-green">
                            <a href="/about">ABOUT</a>
                        </div>
                        <div class="h-green">
                            <a href="">SERVICES</a>
                        </div>
                        <div class="h-green">
                            <a href="">AIRPORTS</a>
                        </div>
                        <div class="h-green">
                            <a href="">TRAIN STATIONS</a>
                        </div>
                        <div class="h-green">
                            <a href="">CONTACT</a>
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
