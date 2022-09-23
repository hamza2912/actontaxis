import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Victoria() {


    return (

        <>
    
        <Header />

        <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO VICTORIA</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>TaxiMagic has set itself apart from the competition with a great booking service and excellent customer service. Our promise to you is that we will always find you a good taxi at lowest rates in town and ensure that your journey is comfortable, peaceful and hassle-free.
                    </p>
                    <p>Our taxi service provider, Victoria Cabs has a great range of vehicles in the UK, including minivans and more luxurious 4x4s, to help you find the perfect car for your needs. We also offer airport transfers 24/7, door-to-door services from North London to Victoria Cabs, and weekend cab and minicab hire all over London.
                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/Victoria-Station-On-course-1024x683.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Victoria;