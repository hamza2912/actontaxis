import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Airport_widget from '../components/airport_widget';
import Car_slider from '../components/car_slider'


function Home() {

  

  return (
      
    <div className='overflow-x-hidden'>
    
    <Header page="home" />

    <main class="w-full h-auto">
        
        <section class="w-full h-screen lg:p-16 p-5 flex lg:flex-row flex-col bg-1 bg-r">
            <div class="lg:w-1/2 w-full h-auto flex flex-col justify-center mt-24 lg:mt-0">
                <div class="lg:w-full w-r h-auto flex flex-row pr-22r">
                    <div class="lg:w-1/3 w-full h-auto p-2  text-center text-white text-4xl font-semibold bg-yellow-400">
                        <h1>ACTON</h1>
                    </div>
                    <div class="w-31 h-auto py-2 px-4 text-center text-white text-4xl font-semibold  bg-black">
                        <h1>TAXI</h1>
                    </div>
                </div>
                <div class="w-full h-auto items-center lg:items-start">
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
                <h1 className='text-center lg:text-left'>About Ealing Taxi</h1>
            </div>
            <div class="w-full h-auto flex lg:flex-row flex-col-reverse mt-8">
                <div class="lg:w-1/2 w-full h-auto text-lg">
                    <p>Ealing is so big that travelling from one place to another becomes a problem, especially when you
                        don’t own a car. People literally swear when they don’t find a taxi in Ealing when they are in a
                        hurry. The idea of Ealing Taxis was conjured up to solve this problem.</p>
                    <p class="mt-4">At Ealing Taxis, we work to make travelling around or outside the Ealing cheaper and
                        easier by providing online taxis. The company is run by professionals who have considerable
                        years of experience of working in this industry. Not only in Ealing, but we now have taxis
                        operating in other parts of London.</p>
                    <p class="mt-4">Our team at Ealing Taxi strongly believes that customers can only be retained by
                        providing them with premium quality service, at affordable fares. Therefore, we have come up
                        with ingenious ways to cut down your fares for travelling, along with keeping this company
                        sustainable.</p>
                    <p class="mt-4">Ealing Taxi is all about your comfort, if you leave the taxi happy, we consider our mission
                        accomplished. Be it station transfer, airport transfer, cabs for day hire, or any kind of services
                        related to taxis, Ealing taxi is your one stop shop. We aim to make a name by rendering the best
                        services in this area. If you want to avoid any discomfort from your travelling, always choose
                        Ealing Taxis!</p>
                </div>
                <div class="lg:w-1/2 w-full h-auto p-4 flex">
                    <img src="images/pexels-dominika-gregušová-672532.jpg" alt="About Us"/>
                </div>
            </div>
        </section>

        <section class="w-full h-auto py-12 lg:px-20 px-6">
            <div class="w-full h-auto text-center text-4xl font-bold">
                <h4 class="">Our Services</h4>
            </div>
            <div class="w-full h-auto mt-8">
                <div class="w-full h-auto flex grid lg:grid-cols-3 grid-cols-1 gap-8 justify-between">
                    <div class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-taxi"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Pick & Drop</h3>
                            <p class="mt-4">Our pick and drop with meet and greet service can be called at any time of
                                the day or night.</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-coins"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Cheapest Fare Service</h3>
                            <p class="mt-4">We provide taxis in Ealing at lowest fare, yet we maintain quality to give
                                you great travelling experience.</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-brands fa-hire-a-helper"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Day Hire</h3>
                            <p class="mt-4">You can also use our taxis in Ealing for day hire. We provide cabs which are
                                ideal for this purpose.</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-calculator"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Corporate Accounts Service</h3>
                            <p class="mt-4">If you are an employer, our corporate account service can be useful for you.
                                Check it out.</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-car-side"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Variety of Cars</h3>
                            <p class="mt-4">Big or small taxis, we have taxis of every size and luxury. Check out our
                                car fleet.</p>
                        </div>
                    </div>
                    <div
                        class="flex flex-row border border-gray-300 p-6 text-gray-700 hover:text-white h-bg-green">
                        <div class="w-25 h-auto text-4xl mr-3">
                            <p><i class="fa-solid fa-medal"></i></p>
                        </div>
                        <div class="w-2/3 h-auto ml-3">
                            <h3 class="text-2xl font-semibold">Best Quote</h3>
                            <p class="mt-4">To get the best quote, reach out to our customer support or our mobile app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="about-us w-full h-auto flex lg:flex-row flex-col mt-8">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1>Ealing Broadway Taxis</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p>No matter where you are in Ealing, you can use our online booking service to book a taxi in
                        Ealing Broadway. Our taxis in Ealing Broadway operate 24/7 to serve you in the most timely
                        manner possible. You can also download our app to stay connected with us while travelling
                        anywhere.
                        Our Ealing Broadway Taxi service can be chosen at a single click. You can also check the
                        estimated fare and different types of cabs available to choose the cab that is within your
                        budget and is appropriate for your travelling. Be it for airport transfer, railway station
                        transfer or any kind of travelling, our Ealing Broaday taxi service won’t disappoint you.</p>
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
                    <h1>Ealing Common Taxis</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p>Just tell us what your travelling needs are, and we’ll send an appropriate taxi in Ealing Common.
                        Our taxis in Ealing Common can pick you from your pick up location and drop you to your
                        destination at your chosen time, eliminating any hassle from your travelling.
                        The best bit is the whole process is transparent. You are neither overcharged, nor we solicit
                        any kind of hidden charges. Our cab drivers are strictly forbidden to misbehave with our
                        customers. From booking a Ealing Common taxi to dropping you to your destination, you’ll have a
                        great experience. Our Taxis in Ealing Common are always on time.</p>
                </div>
            </div>
        </div>

        <div class="about-us w-full h-auto flex lg:flex-row flex-col">
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1>North Ealing Taxis</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p>If you are from North Ealing, or any part of the Ealing, we can provide you with the best Ealing
                        cab near you in little time. Because our whole system is computerized, it is easy to ensure that
                        all the rides are completed in a timely manner. Our taxis in North Ealing are driven by trained
                        and educated drivers.
                        You can choose our North Ealing Taxi for any kind of travelling, airport or station transfers,
                        day hires for events like wedding parties, birthday parties, corporate events, or anything. Just
                        let us know what kind of cab you prefer travelling in, and we’ll send a perfect taxi in North
                        Ealing for you.</p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/pexels-kelvin-valerio-751538.jpg" alt="contentImg3" />
            </div>
        </div>

        <div class="w-full h-auto flex lg:flex-row flex-col-reverse">
            <div class="lg:w-1/2 w-full h-auto flex">
                <img src="images/pexels-gela-3569868.jpg" alt="contentImg4" />
            </div>
            <div class="lg:w-1/2 w-full h-auto lg:p-16 p-6">
                <div class="w-full h-auto text-3xl font-bold">
                    <h1>South Ealing Taxis</h1>
                </div>
                <div class="w-full h-auto mt-6">
                    <p>South, North, Common, or Broadway, we are everywhere. Our taxis in South Ealing are 24/7 at your
                        disposal to ensure that you travel from one place to another in Ealing without any discomfort
                        and at low fares. Choose us to have life time travelling experience.
                        Like in all other areas of Ealing, our South Ealing Taxi service can be used for internal
                        travelling around the area or for airport or station transfers. Just let us know at what time
                        you intend to travel, our taxi in South Ealing will pick you from your place and drop you at
                        your destination at economical fares.</p>
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

                        <Airport_widget src="images/icons/airport1.png" title="Healthrow" />
                        <Airport_widget src="images/icons/airport2.png" title="Healthrow" />
                        <Airport_widget src="images/icons/airport3.png" title="Healthrow" />
                        <Airport_widget src="images/icons/airport4.png" title="Healthrow" />
                        <Airport_widget src="images/icons/airport5.png" title="Healthrow" />
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full h-auto py-10 px-12">
            <div class="w-full h-auto text-center text-5xl font-bold">
                <h1>Car Fleet</h1>
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
                    <h1>Railway Station</h1>
                    <h1>Transfer Service</h1>
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
                                    <h2><a href="">Waterloo</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Hire our taxi for your Waterloo Station Transfer.</p>
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
                                    <h2><a href="">King's Cross</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Make your King’s cross station transfer hassle free by
                                    choosing us.</p>
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
                                    <h2><a href="">London Bridge</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Our taxis can drop you to London Bridge station at a cheap
                                    fare.</p>
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
                                    <h2><a href="">Euston</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Call us at any time of the day for your Euston transfer
                                    from Ealing.</p>
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
                                    <h2><a href="">Paddington</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Book your taxi for Paddington station transfer on one
                                    call.</p>
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
                                    <h2><a href="">Charing Cross</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">We make your journey to Charing Cross safe and
                                    comfortable.</p>
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
                                    <h2><a href="">Victoria</a></h2>
                                </div>
                                <p class="mt-2 text-gray-600">Make your 8 mile journey to Victoria from Ealing
                                    memorable.</p>
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
