import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Luton() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO LUTON</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>For finding a taxi or minicab to Acton to Luton, you can contact us at anytime and we'll make sure that we provide you the cab or minicab Acton to Luton without any delay.

                    </p>
                    <p>Our cars are reliable and made available at economical rates. You can choose from some of the finest cars, like the MVPs, Executive and Saloon or Estate ones. So no matter what your needs are, there is a good chance we’ve got a car for you.
                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-oleksandr-pidvalnyi-1008155.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Luton;