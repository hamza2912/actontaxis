import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Paddington() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO PADDINGTON</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <h1 className="font-bold pb-4 text-black text-xl">Minicabs from Acton to Paddington</h1>
                    <p>Bad weather is a risk for us all, and when it hits, you need to know that you aren't going to be caught out.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Minicab Fares are Reasonably Priced</h1>
                    <p>Our network of cabs Paddington to Acton are ready whenever you need them.
                    </p>
                    <p>Call us now!</p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-andrew-jones-12033571.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Paddington;