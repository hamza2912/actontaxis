import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Waterloo() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO WATERLOO</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>Finding a taxi at the last moment can be a painstaking process.
                    </p>
                    <p>Imagine yourself looking for a taxi Waterloo to Acton or South Acton but unable to find one that you can trust.
                    </p>
                    <p>But there is good news for you now. We’re a reliable taxi company that is providing taxi near you for your-hassle free transfer to any of the two stations from Waterloo.
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-nick-vasin-10550660.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Waterloo;