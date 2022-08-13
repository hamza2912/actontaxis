import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Cabs() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">CABS</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <h1 className="font-bold pb-4 text-black text-xl">Cabs from Acton to Paddington</h1>
                    <p>Catching a taxicab from Acton to Paddington can be time-consuming. Given that you reserved your cab through a reputable cab company, you may be required to wait a while before your cab arrives. Otherwise, the cab may never arrive. And, as is common in many circumstances, passengers are subject to hidden fees.
                    Nobody wants to use any of these services. And you don't have to because we give the greatest cabs. Our automobile portfolio includes MVPs, executives, saloons, and estates. So, whether you require a little or large cab, we have you covered.


                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Service with the Lowest Fare</h1>
                    <p>As previously stated, no one wants to go through a dishonest business. You don't have to be concerned about this when you choose us. Considering that we aim to be the least fare service, we supply you with the cheapest fare cabs. Aside from just that, we offer the clearest services. There are no hidden fees.
                    The goal is to meet the demands of people with different budgets. Whenever you require a cheap cab, you can obtain one. In contrast, if you require a deluxe cab, we can arrange one. The fact remains, that we own an option for everyone, regardless of their budget or tastes.


                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Pick and Drop</h1>
                    <p>If you need to get to the airport or train station, you can rely on our meet & greet service. Our pick-up and drop-off services are available 24 hours a day, seven days a week, so you can contact us at any time of day or night.
                    The pick & drop including a meet-and-greet option we offer, like all of our services, is on time and within budget. Because our entire procedure is electronic, there are no extra delays on our end. Your entire information is entered into the system, and when the time comes for your cab to arrive, it will arrive at your door.


                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Affordable Tender</h1>
                    <p>We never say no, regardless of the time you need us. Easily download the Acton Taxi application on your devices to remain connected with us and save yourself the time-consuming task of looking after an Acton cab nearby you. Instead, you may book a cab with a single click.
                    Whenever you have any questions about our services, please contact our customer care. Even if you want the best value, phone us at the number provided, and our crew will make sure you get the greatest cab according to your requirements and budget.

                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-duane-mendes-8680487.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Cabs;