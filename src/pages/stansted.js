import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Stansted() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO STANSTED</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>do you have an airport transfer coming up? But don’t you need to worry if you do?
                    </p>
                    <p>Let us take care of it for you and we’ll make sure that we provide you the cab Acton to Stansted or minicab Acton to Stansted without any delay.
                    </p>
                    <p>dYou can choose from any of these cars, call us or visit our website to book your car now!
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-pixabay-69121.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Stansted;