import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Train() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">TRAIN STATIONS</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <h1 className="font-bold pb-4 text-black text-xl">Taxis from Acton to Paddington</h1>
                    <p>IYou are aware that the climate is uncertain. You're not in the mood to risk driving your individual car and being caught in terrible weather. So, what are your options? Let's call a cab from the taxi business, then. But you don't know any!!! Consider this: you are obligated to get to Paddington station, but there is no cab connecting Acton to Paddington that can help you.
                    You will either arrive late at Paddington station or, worst-case scenario, miss the train. But don't worry since we offer cabs from Acton to Paddington at any time of day or night.

                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Taxis from Acton to Paddington at a Low Cost</h1>
                    <p>We intend to serve a wide spectrum of clients. We offer taxis that are within your budget, regardless of your social level or the amount of money you have set out for travel expenditures. We have taxis for every budget, from the most basic to the most expensive.
                    The greatest part is that, although proclaiming to be the best value provider, we consistently maintain high-quality standards, ensuring that your travel experience with us is once in a lifetime. Cabs with the lowest fares, no hidden fees, and nothing that will put a strain on your wallet.

                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Taxis from Acton to Paddington Near You</h1>
                    <p>Stop looking for a cab around you and reach out to us instead. We can offer you a taxi to your desired location regardless of where you are. That, too, without any additional fees for the last-minute booking.
                    Because of our timeliness, our station leased line is among the strongest competitors. We realize the value of time; hence, we provide the taxi to your home or pick you up from the railway at the agreed-upon hour to avoid any inconvenience.

                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Service of Meet and Greet</h1>
                    <p>Our pick-up and drop-off service with meet-and-greet is available 24 hours a day, seven days a week. To make the most of your experience and save time, you may book ahead of time by installing our application or phoning us at the number provided.
                    If you are unsure about what taxi to hire, you may call our customer service at any moment to get all of your questions addressed. They will counsel customers in an unbiased manner to assist you in selecting the finest alternative available based on your preferences.

                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Day Rental Taxis</h1>
                    <p>IOur cab service does not stop at station transfers. However, we also provide day-hiring cabs so that you may go outside of the city, to celebrations, special events, and tourism at reasonable rates.
                    We also offer business accounts, so you can provide your staff with the privilege of traveling in quality taxis without needing to pay immediately after the journey. To receive the best rate, check our app at any time and enter your destination and pick-up location to find out how much it will cost.

                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-marcos-araujo-1824169.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Train;