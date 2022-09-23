import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function About() {


    return (

    <>

    <Header />

    <Book />
 
      <section>
        <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">About Us</h1>
        <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
            <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                <p>It is difficult to travel when you do not possess a vehicle. And when you possess one, the prospect of being delayed in traffic and driving for hours on end makes you nauseous. So, Acton Taxis is here to alleviate these two inconveniences from your travel. Our taxis are your automobiles. Call them whenever you want. Choose your preferred vehicle. And you can go anyplace.</p>
                <p class="mt-6">Our car inventory comprises MVPs, Saloons, and Executive cars, giving you a wide range of alternatives when choosing a vehicle for travel. All for a reasonable price. There are no hidden fees. Customer service is available 24 hours a day, 7 days a week.</p>
                <p class="mt-6">Our cab service is intended for:</p>
                <ul class="t-services ml-6 mt-6">
                    <li>Airport transfer from the station</li>
                    <li>Excursions outside of Acton</li>
                    <li>Travelling outside Ealing</li>
                    <li>The daily commute to and from work Special events, such as parties and weddings</li>
                    <li>Traveling and sightseeing in any nearby region, including the entire city of London</li>
                </ul>
            </div>
            <div class="lg:w-1/3 w-full h-auto">
                <img src="images/pexels-enes-adem-çeti̇nkaya-8889206.jpg" alt="aboutHomeImg" />
            </div>
        </div>

        
    </section>

    <Footer />

    </>

    );
}

export default About;