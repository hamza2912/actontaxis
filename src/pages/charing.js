import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Charing() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO CHARING CROSS</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>For those who are in need of taxi Charing Cross to South Acton, West Acton & Charing Cross we would be the right service provider. In addition to offering regular taxi services that are available on demand, we also provide A/C and Non A/C minivans at affordable rates for your convenience.
                    </p>
                    <p>Our cheap fare taxi makes your traveling budget friendly with our pick and drop service. So that you don’t have to go through any hassle before or during your later phase of the travelling.
                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/default.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Charing;