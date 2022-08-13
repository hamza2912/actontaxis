import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Airport() {


    return (

        <>
    
        <Header />
     
          <section>
            <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">AIRPORTS</h1>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
                <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                    <h1 className="font-bold pb-4 text-black text-xl">Acton Airport Taxis</h1>
                    <p>It's natural to be concerned about an upcoming airport transfer. But don't be concerned if you do. We are a cab service that has you covered. You may call us at any time to locate transport from Acton to Paddington, and we will make sure that you get a car or a minicab from Acton as soon as possible.
                    For this reason, we offer a variety of the finest vehicles accessible. Our automobile portfolio includes MVPs, executives, saloons, and estates. So, irrespective of what your demands are or what type of automobile you prefer, we have lots of alternatives for you to pick from.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Acton Airport Transfers</h1>
                    <p>Our services are available in all areas of Acton, regardless of where you live. Also, when it concerns fares, we are the most affordable. Our services provide low-cost vehicles for Acton airport transfers, so you won't have to worry about paying exorbitant fees when you travel with us.
                    However, delivering the cheapest airport car from Acton does not prevent us from keeping good standards. Our services and offerings will continue to be of the highest caliber. Whatever services we pledge to are always supplied, whether you select a roomy and elegant automobile or an economy one.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Taxi from Acton Near You</h1>
                    <p>The best part is that you don't have to leave your house to rent a vehicle from Acton. We have a smartphone app that you may download to keep attached to us no matter where you're in Acton. In any case, our services are quick and you will receive a swift answer.
                    The exact same is applicable for our meet and greet pick-up and drop-off services. Except for booking your automobile, you have nothing to do. Then you delegate the remaining to our team. Our staff shall receive you from your home or office and deliver you off at any airport on time. As a result, your airside transportation will be completed on time.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Service for Corporate Accounts</h1>
                    <p>The corporate accounts expertise of our company serves as one of the factors that distinguish us apart in this sector. It is not simply about one group or class of individuals, but about people with diverse requirements. Employers, like their employees, may benefit from this service by flying at low-cost rates.
                    When you utilize this service, you allow your employees to travel freely from any location in Acton without being required to pay immediately after the journey. Aside from that, clients receive substantial savings on their journey from the Acton terminal. There are no restrictions on who can use this.
                    </p>
                    <h1 className="font-bold mt-8 pb-4 text-black text-xl">Obtain the Most Competitive Estimate</h1>
                    <p>If you require a taxi for the entire day, generally known as a day rental service, you can contact us. The same vehicle from Acton transport that we supply may also be utilized for a full day. And, like all of our services, our day rental taxis and minicabs are reasonably priced and of high quality.
                    In case you still have any questions about our services, please contact us by phone or email. Alternatively, if you want to receive the best pricing, you may contact us through the app or phone. In any scenario, you'll receive a timely answer and advice on selecting the best vehicle for your transfer.
                    </p>
                </div>
                <div class="lg:w-1/3 w-full h-auto">
                    <img src="images/pexels-guilherme-rossi-1815385.jpg" alt="aboutHomeImg" />
                </div>
            </div>
    
            <Book />
            
        </section>
    
        <Footer />
    
        </>
    
        );
}

export default Airport;