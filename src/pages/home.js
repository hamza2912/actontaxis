import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Airport_widget from '../components/airport_widget';
import Car_slider from '../components/car_slider';
import { useHistory } from 'react-router-dom';


function Home() {

    let history = useHistory();


  return (
      
    <div className='overflow-x-hidden'>
    
    <Header page="home" />

    <main class="w-full h-auto">

        <section class="w-full lg:h-screen h-auto lg:p-16 p-5 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-1/2 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0">
                <div data-aos="fade-right" data-aos-duration="800" class="lg:w-full w-r h-auto flex flex-row pr-22r">
                    <div class="lg:w-1/3 w-full h-auto p-2  text-center text-white text-4xl font-semibold bg-yellow-400">
                        <h1>ACTON</h1>
                    </div>
                    <div class="w-31 h-auto py-2 px-4 text-center text-white text-4xl font-semibold  bg-black">
                        <h1>TAXI</h1>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="800" class="w-full h-auto items-center lg:items-start">
                    <div class="w-full h-auto mt-4 text-3xl text-white font-semibold mt-8">
                        <h2>A RELIABLE TAXI COMPANY</h2>
                    </div>
                    <div class="w-full h-auto text-xl text-gray-300 font-semibold mt-8">
                        <p class="mt-2"><i class="fa-solid fa-clock text-yellow-400 mr-3"></i>Always on Time</p>
                        <p class="mt-2"><i class="fa-solid fa-user-group text-yellow-400 mr-3"></i>Customer Friendly</p>
                        <p class="mt-2"><i class="fa-solid fa-money-bills text-yellow-400 mr-3"></i>Economical fares</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto flex flex-col justify-center mt-8 lg:mt-0">
                <div class="w-full h-auto flex justify-center">
                    <div class="lg:w-1/2 w-4/5 h-auto bg-blue text-center px-4 py-6 rounded-lg">
                        <h1 class="text-3xl text-white font-semibold">Book Your Journey</h1>
                        <form action="">
                            <div class="w-full h-auto mt-6">
                                <ul>
                                    <li class="w-full h-auto">
                                        <label for="source">Name:</label>
                                        <input placeholder="Start Address" type="text" id="source" name="from"
                                            class="form-control ui-autocomplete-input w-full h-auto rounded p-2 focus:outline-none"
                                            required autocomplete="off" />
                                    </li>
                                    <li>
                                        <label for="dest">Name:</label>
                                        <input placeholder="End Address" type="text" id="dest" name="to"
                                            class="form-control ui-autocomplete-input w-full h-auto rounded p-2 mt-4 focus:outline-none"
                                            required="" autocomplete="off" />
                                    </li>
                                    <li>
                                        <input type="hidden" name="office_name" value="TNW" />
                                        <input type="hidden" name="office_details" value=""/>
                                        <button name="button" type="submit" id="submit"
                                            class="btn btn-primary w-full h-auto rounded bg-blue-400 text-white p-2 mt-4 hover:bg-blue-500 focus:outline-none text-lg font-semibold">GET
                                            QUOTE</button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>


        <div class="w-full h-auto flex flex-row bg-gray-700 px-16 py-6">
            <div class="w-1/2 h-auto flex lg:flex-row flex-col items-center">
                <i class="fa-solid fa-mobile-screen-button text-5xl text-yellow-400 mr-2"></i>
                {/* <img class="" src="images/icons/phoneLarge.png" alt="phone" /> */}
                <h1 class="lg:text-xl text-sm text-white text-center mt-4 lg:mt-0">Book and manage trips via our mobile apps.</h1>
            </div>
            <div class="w-1/2 h-auto lg:px-12 px-5 flex lg:flex-row flex-col lg:justify-between justify-center">
                <a href=""><img src="images/icons/googlePlayStore.png" alt="GooglePlayStore"/></a>
                <a href=""><img className='mt-4 lg:mt-0' src="images/icons/appleAppStore.png" alt="AppleAppStore"/></a>
            </div>
        </div>


        <section class="about-us w-full h-auto lg:p-16 py-16 px-6">
            <div class="w-full h-auto text-3xl font-bold">
                <h1  className='text-center lg:text-left'>About ActonTaxis</h1>
            </div>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse mt-8">
                <div data-aos="fade-right" data-aos-duration="800" class="lg:w-1/2 w-full h-auto text-lg">
                    <p>Areas have become sufficiently large that getting from one location to another might be difficult, especially if you don't possess a car. People become anxious when they are unable to locate a taxi, especially if they are hurrying.  To address this issue, the concept of Acton Taxis was born.</p>
                    <p class="mt-4">Acton Taxis strives to make travel more affordable and convenient by offering online cabs. The firm is managed by individuals with multiple years of expertise in the sector. Taxis are increasingly available in various regions of London.</p>
                    <p class="mt-4">Acton Taxi considers that clients can only be sustained by providing them with high-quality service at reasonable prices. As a result, we've devised inventive strategies to reduce your travel costs while also maintaining this organization viable.</p>
                    <p class="mt-4">Acton Taxi focuses on your comfort; if you leave satisfied, we consider our goal complete. Acton taxi is your one-stop shop for terminal transfers, airport transfers, vehicles for day rental, and any other taxi-related service. We ought to establish a reputation of ourselves by delivering the finest services in this domain. Choose Acton Taxis if you want to prevent any inconvenience while traveling!</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="800" class="lg:w-1/2 w-full h-auto p-4 flex">
                    <img src="images/pexels-dominika-gregušová-672532.jpg" alt="About Us"/>
                </div>
            </div>
        </section>

        <section id="service" class="w-full h-auto py-12 lg:px-20 px-6">
            <div class="w-full h-auto text-center text-4xl font-bold">
                <h4 data-aos="fade-up" data-aos-duration="800" class="">Our Services</h4>
            </div>
            <div class="w-full h-auto mt-8">
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

        <div class="about-us w-full h-auto flex lg:flex-row flex-col mt-8">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1 data-aos="fade-right" data-aos-duration="800">Taxis on Lane in London</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-right" data-aos-duration="800">Regardless of where you are in London, you may book a taxi using our online booking service. Our taxis in London are available 24 hours a day, seven days a week to assist you as soon as possible. You also might install our app to remain in touch with us while traveling.
                    Our taxi service is accessible with just one click. You may also look at the projected rate and different types of cabs available to get one that fits your budget and is acceptable for your trip. Our service will not let you down, whether it's for an airport transfer, a train station transfer, or any other type of travel.</p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/pexels-vlad-alexandru-popa-1486222.jpg" alt="contentImg1" />
            </div>
        </div>

        <div class="w-full h-auto flex lg:flex-row flex-col-reverse">
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/pexels-enes-adem-çeti̇nkaya-8889206.jpg" alt="contentImg2" />
            </div>
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1 data-aos="fade-left" data-aos-duration="800">Popular Acton Taxis</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-left" data-aos-duration="800">Simply tell us what your travel requirements are, and we'll dispatch an appropriate taxi to your location. Our taxis may pick you up from your pick-up location and drop you off at your destination at a time that is convenient for you.
                    The nicest part is that the entire procedure is visible. You are not overcharged, nor are any hidden fees requested. It is banned for our cab drivers to mistreat our passengers. You'll have a lovely time, from reserving an Acton cab to being dropped up at your location. Our taxis are always on time.
                    </p>
                </div>
            </div>
        </div>

        <div class="about-us w-full h-auto flex lg:flex-row flex-col">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1 data-aos="fade-right" data-aos-duration="800">Taxis from Acton to Paddington</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-right" data-aos-duration="800">If you live in Acton and need a ride to Paddington, we can offer you the best Acton cab near you in no time. Since our entire system is computerized, it is simple to assure that all rides are completed on time. Our cab drivers are well-trained and knowledgeable.
                    </p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/home.jpg" alt="contentImg3" />
            </div>
        </div>

        <div class="w-full h-auto flex lg:flex-row flex-col-reverse">
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/christian-lendl-wPDkSY7v_t8-unsplash.jpg" alt="contentImg4" />
            </div>
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1 data-aos="fade-left" data-aos-duration="800">Taxis from Acton to Paddington</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p data-aos="fade-left" data-aos-duration="800">You can use our Acton Taxi for any type of transportation, such as airport or railway transfers, daytime hiring for events like receptions, family events, corporate gatherings, and much more. Simply tell us what kind of cab you like, and we'll send you the appropriate taxi.</p>
                </div>
            </div>
        </div>

        <div class="w-full h-auto opacity-2">
            <div class="w-full h-auto bg-img">
                <div class="w-full h-auto lg:p-16 p-6">
                    <div class="w-full h-auto text-center text-5xl font-semibold text-white">
                        <h1>Airport Transfers</h1>
                    </div>
                    <div class="w-full h-auto lg:p-16 py-10 flex justify-center grid lg:grid-cols-5 grid-cols-2 lg:gap-8 gap-5 place-items-center">

                        <Airport_widget src="images/icons/airport1.png" url='/heathrow' title="Healthrow" />
                        <Airport_widget src="images/icons/airport2.png" url='/gatwick' title="Gatwick" />
                        <Airport_widget src="images/icons/airport3.png" url='/luton' title="Luton" />
                        <Airport_widget src="images/icons/airport4.png" url='/stansted' title="Stansted" />
                        <Airport_widget src="images/icons/airport5.png" url='/london' title="London City" />
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto py-10 px-12">
            <div class="w-full h-auto text-center text-5xl font-bold">
                <h1 data-aos="fade-up" data-aos-duration="800">Car Fleet</h1>
            </div>
            <div class="w-full h-auto flex">
                <div class="owl-carousel owl-theme lg:px-10 px-6">

                    <Car_slider src="images/car1.jpg" title="MVP Cars" desc="We have luxurious taxis available in the form of MVP. They give you life time
                                    experience while travelling with us." />

                    <Car_slider src="images/car3.jpg" title="Saloon Cars" desc="Book our saloon cars to make your corporate events, wedding ceremonies, and birthday
                                    parties memorable." />

                    <Car_slider src="images/car4.jpg" title="Executive Cars" desc="If you don’t settle for anything less than the best, our Executive cars are a great
                                    choice for any kind of travelling." />
                                    
                </div>
            </div>
        </div>
        
        <div class="w-full h-auto flex lg:flex-row flex-col">
            <div class="lg:w-1/2 w-full h-auto bg-img-1 py-40 lg:px-24 p-8">
                <div class="w-full h-auto opacity-3 lg:p-16 p-4 text-center text-white text-4xl font-bold">
                    <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="1000">Transfer Service</h1>
                    <h1 data-aos="fade-right" data-aos-duration="800" data-aos-delay="1000">from the Railway Station</h1>
                </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto py-12 lg:px-8 px-5 bg-gray-50">
                <div class="w-full h-auto grid lg:grid-cols-2 grid-cols-1 gap-2">
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station1.png" alt="station1" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/waterloo")}>Waterloo</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Use our taxi to get to Waterloo Station.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station3.png" alt="station3" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/kingcross")}>The King's Cross</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Choose us to make your King's Cross station transfer as easy as possible.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station5.png" alt="station5" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/bridge")}>London Bridge</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Our cabs can take you to London Bridge station for a reasonable price.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station7.png" alt="station7" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/euston")}>Euston</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Contact us at whatever time of day or night for your Euston transfer.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station2.png" alt="station2" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg font-bold h-underline">
                                    <h2><a onClick={()=>history.push("/paddington")}>Paddington</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Make one call to book your taxi for the Paddington station transfer.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station4.png" alt="station4" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/charingcross")}>The Charing Cross</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">We make your journey to Charing Cross as pleasant and convenient as possible.</p>
                            </div>
                        </div>
                        <div class="w-full h-auto flex flex-row">
                            <div class="w-1/2 h-auto">
                                <div class="p-4 station mt-3">
                                    <img class="w-full" src="images/icons/station6.png" alt="station6" />
                                </div>
                            </div>
                            <div class="w-full h-auto ml-6">
                                <div class="w-full text-lg h-underline font-bold">
                                    <h2><a onClick={()=>history.push("/victoria")}>Victoria</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Make your tedious travel from Acton to Victoria enjoyable.
</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </main>

    <Footer />


  </div>

  );

}
  
export default Home;
