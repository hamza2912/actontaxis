import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function King() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO KING'S CROSS</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>When you face transfer problems, think about our Taxi Station Transfers services. Those who use our services are fully satisfied with the high standards of quality and reliability.
                    </p>
                    <p>Those who use our services are fully satisfied with the high standards of quality and reliability.
                    </p>
                    <p>The most important part of such a booking is the booking of the taxi. We can provide you taxis king's cross to Acton and Paddington station transfers.</p>
                    <p>100% reliable and fault-free taxi service which will make your travel safe and cozy. Click here to learn more.</p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-guillaume-meurice-2815036.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default King;