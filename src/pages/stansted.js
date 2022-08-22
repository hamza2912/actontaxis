import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Stansted() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">STANSTED</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <h1 className="font-bold pb-4 text-black text-xl">Minicabs from Acton to Paddington</h1>
                    <p>Look no further for an Acton to Paddington minicab because our minicab business is available 24 hours a day, 7 days a week. We supply you with both the greatest minicabs to ensure that you can get to your destination without any problem. Our automobile fleet includes one of the greatest minicabs available for all of your needs.
                    Our minicabs are great in terms of quality. Vehicles are secure and have everything you need, including air conditioning and comfortable seats, to keep you comfortable throughout the voyage. Our crew guarantees that only high-quality minicabs are recruited into our force, ensuring that clients always have a once-in-a-lifetime experience.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Minicab Fares are Reasonably Priced</h1>
                    <p>Our mission is to become Acton's preferred minicab service, regardless of their budget. However, Acton Taxis is the firm that gives its customers the cheapest rate minicabs. But it doesn't imply we're sacrificing service quality.
                    Balance and accountability are important aspects of our operations since we desire to satisfy our customers at any cost. As a result, we encourage input from our customers. Their input enables us to upgrade our offerings and advance them. You are guaranteed complete satisfaction when you work with us.
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-pixabay-69121.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Stansted;