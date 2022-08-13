import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import Book from "../components/book";


function Services() {


    return (

    <>

    <Header />
 
    <section id="service" class="w-full h-auto py-12 lg:px-20 px-6">
            <div class="w-full h-auto text-center text-4xl font-bold">
                <h4 data-aos="fade-up" data-aos-duration="800" class="">Our Services</h4>
            </div>
            <div class="w-full h-auto my-8">
                <div class="w-full h-auto flex grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between">
                    <div data-aos="zoom-in" data-aos-delay='50' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-taxi"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Pick & Drop</h3>
                            <p class="mt-4">Our pick-up and drop-off services including meet-and-greet are available at all times.</p>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in" data-aos-delay='100' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-coins"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Service with the Lowest Fare</h3>
                            <p class="mt-4">We supply cabs at the lowest possible cost while maintaining high standards to ensure a pleasant travel experience.</p>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in" data-aos-delay='150' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-brands fa-hire-a-helper"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Day Rental</h3>
                            <p class="mt-4">You could also rent our Acton cabs for the day. We have taxis that are suitable for this task.</p>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in" data-aos-delay='200' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-calculator"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Service for Corporate Accounts</h3>
                            <p class="mt-4">Even if you're a company, you may find our corporate account offering beneficial. Examine it out.</p>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in" data-aos-delay='250' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-car-side"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Various Automobiles</h3>
                            <p class="mt-4">We have cabs of all sizes and levels of luxury. Take a look at our car fleet.</p>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in" data-aos-delay='300' data-aos-duration="800" class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-medal"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Affordable Tender</h3>
                            <p class="mt-4">Contact our customer service or use our smartphone application to receive the best estimate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>

        <Book />

    <Footer />

    </>

    );
}

export default Services;