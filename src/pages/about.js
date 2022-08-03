import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Topbar from "../components/topbar";


function About() {


    return (

    <>

    <Header />
 
      <section>
        <h1 className="text-black text-3xl text-center font-bold lg:pt-16 pt-10">About Us</h1>
        <div class="w-full h-auto flex lg:flex-row flex-col-reverse lg:px-20 px-6 py-16">
            <div class="lg:w-2/3 w-full h-auto lg:px-6 text-lg mt-6 lg:mt-0">
                <p>When you don’t own a vehicle, it becomes difficult to travel. And when you own one, the thought of getting stuck in traffic and driving for hours during long journeys make you sick. So we at Ealing Taxis are here to take out these two discomforts from your travelling. Our taxis are your cars. Call them any time. Choose your favourite car. And travel anywhere.</p>
                <p class="mt-6">Our car fleet includes MVPs, Saloon and Executive cars so you get a plethora of options to choose from when selecting your car for travelling. All at an economical fare. No hidden charges. Courteous customer support ready to guide you 24/7.</p>
                <p class="mt-6">Our taxi service is for:</p>
                <ul class="t-services ml-6 mt-6">
                    <li>Station transfer</li>
                    <li>Airport transfer</li>
                    <li>Travelling outside Ealing</li>
                    <li>Daily commute to and from work</li>
                    <li>Special occasions including parties and weddings</li>
                    <li>Travelling and sightseeing any nearby area including whole London</li>
                </ul>
            </div>
            <div class="lg:w-1/3 w-full h-auto">
                <img src="images/pexels-pixabay-51363.jpg" alt="aboutHomeImg" />
            </div>
        </div>
        <div class="w-full h-auto bg-blue px-12 py-8">
            <div class="w-full h-auto text-center text-white text-2xl font-bold">
                <h2>Book Your Journey</h2>
            </div>
            <div class="w-full h-auto">
                <form action="">
                    <div class="w-full h-auto lg:pr-8 mt-6">
                        <ul class="flex lg:flex-row flex-col justify-between items-center">
                            <li class="w-full h-auto">
                                <label for="source">Name:</label>
                                <input placeholder="Start Address" type="text" id="source" name="from"
                                    class="form-control ui-autocomplete-input w-full h-auto rounded p-2 mr-4 focus:outline-none mt-2 lg:mt-0"
                                    required autocomplete="off" />
                            </li>
                            <li class="w-full h-auto">
                                <label for="dest">Name:</label>
                                <input placeholder="End Address" type="text" id="dest" name="to"
                                    class="form-control ui-autocomplete-input w-full h-auto rounded p-2 lg:mx-4 focus:outline-none mt-2 lg:mt-0"
                                    required="" autocomplete="off" />
                            </li>
                            <li class="w-full h-auto">
                                <input type="hidden" name="office_name" value="TNW" />
                                <input type="hidden" name="office_details" value="" />
                                <button name="button" type="submit" id="submit"
                                    class="w-full h-auto rounded lg:ml-8 bg-green text-white p-2 hover:bg-blue-700 focus:outline-none mt-2 lg:mt-0 text-lg font-semibold">GET
                                    QUOTE</button>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </section>

    <Footer />

    </>

    );
}

export default About;