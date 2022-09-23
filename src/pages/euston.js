import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Euston() {


    return (

        <>
    
        <Header />

    <Book />

     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">ACTON TO EUSTON</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <p>Traveling makes you feel stress free, realising that all you have to worry about is where to go, when and how. To have a taxi company that provides taxis near you 24/7 is a blessing. Imagine when travelling becomes super easy because you don’t have to search again and again for “taxi near me” before you're travelling to make a booking. The peace of mind you’ll enjoy is something different. Especially when it comes to station transfer, the most important bit is finding a cheap fare taxi
                    </p>
                    <p>We believe in developing longer relations with our customers. We offer cheap and discounted services to everyone, regardless of the size of their budget.
                    </p>
                  
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/7-hs2-southern-entrance-low-res.webp" alt="aboutHomeImg" />
                </div>
            </div>
    
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Euston;