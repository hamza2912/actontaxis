import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Heathrow() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO HEATHROW</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>ou don’t need to worry about the last-minute preps, our professionals will assist you from making the travel plans, to booking and selecting a minicab from Acton to Heathrow only for you.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Minicab Fares are Reasonably Priced</h1>
                    <p>When you’re traveling from Acton or going towards Heathrow airport we have got your back! We have great connections on and around Heathrow.
                    You can book your Acton Heathrow airport transfer right away. For more information on it please fill out the form below.
                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-ekky-wicaksono-3760564.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Heathrow;