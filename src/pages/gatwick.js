import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Gatwick() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO GATWICK</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>Airport transfer is not a fun trip or the ideal way to start your vacation. So why go through unnecessary stress and worry?
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Minicab Fares are Reasonably Priced</h1>
                    <p>Instead of finding a taxi Acton to Gatwick on your own, you should leave it to us. We have got some of the finest cars available for this purpose, so no matter what your needs are – and in what kind of car you enjoy travelling – we have plenty of options available for you to choose from.
                    </p>
                    <p>Click here to book an airport transfer today!</p>                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-negative-space-34134.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Gatwick;